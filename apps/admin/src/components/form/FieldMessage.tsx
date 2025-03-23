import { styled } from '@mui/material';

export const FieldMessage = styled('div')(({ theme }) => ({
  ...theme.typography.caption,
}));

export const FieldErrorMessage = styled(FieldMessage)(({ theme }) => ({
  color: theme.palette.error.main,
}));
