import { styled, Alert } from '@mui/material';
import { ToastsItem as ToastsItemBaseProps } from '../../types';
import { useToastsStore } from '../../store';

interface ToastsItemProps extends ToastsItemBaseProps {
  onClose: (id: string) => void;
}

const ToastsWrapper = styled('div')(() => ({
  width: '100%',
  height: 0,
  overflow: 'visible',
  position: 'fixed',
  bottom: 0,
  left: 0,
  zIndex: 9999,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'center',
}));

const ToastList = styled('div')(({ theme }) => ({
  width: '350px',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),

  '& > :last-of-type': {
    marginBottom: theme.spacing(1),
  },
}));

const ToastsItem = ({ id, title, severity, onClose }: ToastsItemProps) => {
  return (
    <Alert variant="filled" severity={severity} onClose={() => onClose(id)}>
      {title}
    </Alert>
  );
};

const Toasts = () => {
  const { toasts, removeToast } = useToastsStore();

  return (
    <ToastsWrapper>
      <ToastList>
        {toasts.map((toast) => (
          <ToastsItem key={toast.id} onClose={removeToast} {...toast} />
        ))}
      </ToastList>
    </ToastsWrapper>
  );
};

export default Toasts;
