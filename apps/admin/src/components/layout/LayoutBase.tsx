import { styled } from '@mui/material';
import { WithChildren } from '@common';

const Wrapper = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  top: 0,
  left: 0,
  backgroundColor: theme.palette.background.default,
}));

interface LayoutBaseProps extends WithChildren {
  variant?: 'default';
  id?: string;
}

const LayoutBase = ({ children, id, variant = 'default' }: LayoutBaseProps) => {
  return (
    <Wrapper id={id} className={`layout-base--${variant}`}>
      {children}
    </Wrapper>
  );
};

export default LayoutBase;
