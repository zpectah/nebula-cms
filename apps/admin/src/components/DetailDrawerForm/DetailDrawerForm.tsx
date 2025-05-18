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
}

const Container = styled(Stack)(({ theme }) => ({
  width: '100%',
  height: '100%',
}));

const Header = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(2),
}));
const Content = styled(Stack)(({ theme }) => ({
  flex: '1',
  position: 'relative',
  overflowX: 'hidden',
  overflowY: 'auto',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}));
const Footer = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(2),
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
                md: '750px',
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
            <Content gap={2}>{isLoading ? <PreloaderBase /> : children}</Content>
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
