import { ReactNode } from 'react';
import { Button, ButtonText, IconContainer } from './styles';

interface ButtonProps {
  title: string;
  variant: 'contained' | 'outlined';
  show: boolean;
  children: string;
  icon: ReactNode;
  onClick: () => void;
}

export const CustomButton = ({
  title,
  variant,
  show,
  children,
  icon,
  onClick,
}: ButtonProps) => {
  return (
    <Button
      title={title}
      variant={variant}
      type="button"
      onClick={onClick}
      show={show}
    >
      <ButtonText>{children}</ButtonText>
      <IconContainer>{icon}</IconContainer>
    </Button>
  );
};
