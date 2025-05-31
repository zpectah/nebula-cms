import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { FieldValues } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
  styled,
  Drawer,
  Stack,
  Button,
  IconButton,
  Typography,
  Skeleton,
  StackProps,
  DrawerProps,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { WithChildren } from '@common';
import { newItemKey } from '../../enums';
import { useToastsStore } from '../../store';
import { ControlledForm, ControlledFormProps } from '../form';
import { PreloaderBase } from '../preloader';
import { ConfirmationDialog, useConfirmationDialog } from '../dialog';

interface DetailDrawerFormProps<T extends FieldValues> extends WithChildren {
  formProps: Omit<ControlledFormProps<T>, 'children'>;
  root: string;
  id?: string;
  title?: string;
  subtitle?: string;
  actions?: ReactNode;
  drawerProps?: Partial<DrawerProps>;
  isLoading?: boolean;
  isDebug?: boolean;
  onDelete?: () => void;
  sidebar?: ReactNode;
  sidebarWidth?: string;
  width?: string;
}

const Container = styled(Stack)(({ theme }) => ({
  width: '100%',
  height: '100%',
}));

const Header = styled(Stack)(({ theme }) => ({
  padding: `${theme.spacing(1.125)} ${theme.spacing(2)}`,
  borderBottom: `1px solid ${theme.palette.divider}`,
}));
const ContentWrapper = styled(Stack)(({ theme }) => ({
  flex: '1',
  position: 'relative',
  overflowX: 'hidden',
  overflowY: 'auto',
}));
const Content = styled(Stack)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));
const Sidebar = styled(Content)(({ theme }) => ({
  paddingLeft: 0,
}));
const Footer = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: `1px solid ${theme.palette.divider}`,
}));

const DetailDrawerForm = <T extends FieldValues>({
  formProps: { form, formProps },
  children,
  root,
  id,
  title,
  subtitle,
  actions,
  drawerProps,
  isLoading,
  onDelete,
  sidebar,
  sidebarWidth,
  width,
}: DetailDrawerFormProps<T>) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { open: confirmationOpen, onClose: onConfirmationClose, onOpen: onConfirmationOpen } = useConfirmationDialog();
  const { addToast } = useToastsStore();

  const closeHandler = () => navigate(root);
  const confirmDeleteHandler = () => {
    onDelete?.();
    closeHandler();
    addToast(t('message.itemDeleted'), 'success', true);
  };

  const isNew = id === newItemKey;
  const isValid = !!form?.formState.isValid;
  const isDirty = form?.formState.isDirty;

  const finalSidebarWidth = sidebarWidth ?? '220px';
  const drawerWidthBase = '680px';
  const drawerWidth = width ?? !!sidebar ? `calc(${finalSidebarWidth} + ${drawerWidthBase})` : drawerWidthBase;

  const barProps: Partial<StackProps> = {
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 2,
  };

  return (
    <>
      <Drawer
        open={!!id}
        anchor="right"
        onClose={closeHandler}
        slotProps={{
          paper: {
            sx: {
              width: {
                xs: '100vw',
                md: drawerWidth,
              },
            },
          },
        }}
        {...drawerProps}
      >
        <ControlledForm
          form={form}
          formProps={{ style: { width: '100%', height: '100%', display: 'flex' }, ...formProps }}
        >
          <Container>
            <Header {...barProps}>
              <Stack>
                {isLoading && <Skeleton variant="text" width={350} sx={{ fontSize: '1.6rem' }} />}
                <Typography variant="h3">{title}</Typography>
                <Typography variant="subtitle2">{subtitle}</Typography>
              </Stack>
              <IconButton onClick={closeHandler}>
                <CloseIcon />
              </IconButton>
            </Header>
            <ContentWrapper
              gap={2}
              sx={{
                flexDirection: {
                  xs: 'column',
                  md: 'row',
                },
              }}
            >
              {isLoading ? (
                <PreloaderBase />
              ) : (
                <>
                  <Content flex={1} gap={2}>
                    {children}
                  </Content>
                  {sidebar && (
                    <Sidebar
                      gap={2}
                      sx={({ spacing }) => ({
                        width: {
                          xs: '100%',
                          md: finalSidebarWidth,
                        },
                        paddingLeft: {
                          xs: spacing(2),
                          md: 0,
                        },
                        paddingBottom: {
                          xs: spacing(2),
                          md: 0,
                        },
                      })}
                    >
                      {sidebar}
                    </Sidebar>
                  )}
                </>
              )}
            </ContentWrapper>
            <Footer {...barProps}>
              <Stack direction="row" gap={2}>
                <Button type="submit" variant="contained" disabled={isLoading}>
                  {isNew ? t('button.create') : t('button.update')}
                </Button>
                <Button onClick={() => form?.reset()} variant="outlined" disabled={!isDirty}>
                  {t('button.reset')}
                </Button>
                {!isNew && (
                  <Button onClick={onConfirmationOpen} color="error" variant="outlined">
                    {t('button.delete')}
                  </Button>
                )}
                {actions}
              </Stack>
              <Stack>
                <Button onClick={closeHandler} variant="outlined" disabled={isLoading}>
                  {t('button.cancel')}
                </Button>
              </Stack>
            </Footer>
          </Container>
        </ControlledForm>
      </Drawer>
      <ConfirmationDialog
        open={confirmationOpen}
        onClose={onConfirmationClose}
        onConfirm={confirmDeleteHandler}
        title={t('confirmation.delete.title')}
        description={t('confirmation.delete.description')}
      />
    </>
  );
};

export default DetailDrawerForm;
