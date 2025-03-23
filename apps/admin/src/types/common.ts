import { OverridableStringUnion } from '@mui/types';
import { IconButtonPropsColorOverrides } from '@mui/material';

export type MuiButtonColor =
  | OverridableStringUnion<
      'inherit' | 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning',
      IconButtonPropsColorOverrides
    >
  | undefined;
