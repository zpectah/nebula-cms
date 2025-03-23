import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonProps } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export type AddButtonProps = Partial<Omit<ButtonProps, 'variant' | 'color' | 'ref'>> & {
  route: string;
};

const AddButton = forwardRef<HTMLButtonElement, AddButtonProps>(({ children, route, ...rest }, ref) => {
  return (
    <Button
      component={Link}
      to={route}
      variant="contained"
      color="success"
      size="large"
      startIcon={<AddIcon />}
      ref={ref}
      {...rest}
    >
      {children}
    </Button>
  );
});

export default AddButton;
