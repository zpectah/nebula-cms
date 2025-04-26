import { useTranslation } from 'react-i18next';
import { Dialog, DialogContent, Typography, Stack, Button } from '@mui/material';

export interface ConfirmationDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
}

const ConfirmationDialog = ({
  open,
  onClose,
  onConfirm,
  title,
  description,
  confirmLabel,
  cancelLabel,
}: ConfirmationDialogProps) => {
  const { t } = useTranslation();

  const confirmButtonLabel = confirmLabel ?? t('button.confirm');
  const cancelButtonLabel = cancelLabel ?? t('button.cancel');

  const confirmHandler = () => {
    onConfirm();
    onClose();
  };

  return (
    <Dialog maxWidth="xs" fullWidth open={open} onClose={onClose}>
      <DialogContent>
        <Stack gap={3}>
          <Stack gap={1.5} sx={{ textAlign: 'center' }}>
            <Typography variant="h4">{title}</Typography>
            {description && <Typography>{description}</Typography>}
          </Stack>
          <Stack gap={0.5}>
            <Button color="primary" variant="contained" onClick={confirmHandler}>
              {confirmButtonLabel}
            </Button>
            <Button variant="outlined" onClick={onClose}>
              {cancelButtonLabel}
            </Button>
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationDialog;
