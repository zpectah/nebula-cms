import {
  styled,
  Card as MuiCard,
  CardContent,
  CardActions,
  CardProps as MuiCardProps,
  CardContentProps,
  CardActionsProps,
  Typography,
  Stack,
} from '@mui/material';

interface CardProps extends MuiCardProps {
  title?: string;
  subtitle?: string;
}

const Wrapper = styled(MuiCard)(({}) => ({
  width: '100%',
}));

const Card = ({ children, title, subtitle, ...rest }: CardProps) => {
  const cardProps: Partial<MuiCardProps> = {
    elevation: 0,
    variant: 'outlined',
    ...rest,
  };

  return (
    <Wrapper {...cardProps}>
      <CardContent>
        <Stack gap={3}>
          <Stack>
            <Typography variant="h4">{title}</Typography>
            <Typography variant="subtitle2">{subtitle}</Typography>
          </Stack>
          {children}
        </Stack>
      </CardContent>
    </Wrapper>
  );
};

export default Card;
