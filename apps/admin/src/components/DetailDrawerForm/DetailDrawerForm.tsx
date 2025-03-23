import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { FieldValues } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { styled, Drawer, Stack, Button, IconButton, Typography, StackProps, DrawerProps } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { WithChildren } from '@common';
import { ControlledForm, ControlledFormProps } from '../form';

interface DetailDrawerFormProps<T extends FieldValues> extends WithChildren {
  formProps: Omit<ControlledFormProps<T>, 'children'>;
  root: string;
  id?: string;
  title?: string;
  subtitle?: string;
  actions?: ReactNode;
  drawerProps?: Partial<DrawerProps>;
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
}: DetailDrawerFormProps<T>) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const closeHandler = () => navigate(root);

  const isNew = id === 'new';

  const barProps: Partial<StackProps> = {
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 2,
  };

  return (
    <Drawer
      open={!!id}
      anchor="right"
      onClose={closeHandler}
      slotProps={{ paper: { sx: { width: '50vw' } } }}
      {...drawerProps}
    >
      <ControlledForm
        form={form}
        formProps={{ style: { width: '100%', height: '100%', display: 'flex' }, ...formProps }}
      >
        <Container>
          <Header {...barProps}>
            <Stack>
              <Typography variant="h3">{title}</Typography>
              <Typography variant="subtitle2">{subtitle}</Typography>
            </Stack>
            <IconButton onClick={closeHandler}>
              <CloseIcon />
            </IconButton>
          </Header>
          <Content gap={2}>{children}</Content>
          <Footer {...barProps}>
            <Stack direction="row" gap={2}>
              <Button type="submit" variant="contained">
                {isNew ? t('button.create') : t('button.update')}
              </Button>
              <Button onClick={() => form?.reset()} variant="outlined">
                {t('button.reset')}
              </Button>
              {actions}
            </Stack>
            <Stack>
              <Button onClick={closeHandler}>{t('button.cancel')}</Button>
            </Stack>
          </Footer>
        </Container>
      </ControlledForm>
    </Drawer>
  );
};

export default DetailDrawerForm;
