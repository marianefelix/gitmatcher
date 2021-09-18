import { Button } from './styles';

interface ButtonProps {
  show: boolean;
  children: string;
  onClick: () => void;
}

export const CustomButton = ({ show, children, onClick }: ButtonProps) => {
  return (
    <Button type="button" onClick={onClick} show={show}>
      {children}
    </Button>
  );
};
