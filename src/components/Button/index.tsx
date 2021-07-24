import React from 'react';

import './styles.css';

interface ButtonProps {
  buttonState: string;
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({ buttonState, children, onClick }: ButtonProps) => {
  return (
    <div className={`button ${buttonState}`}>
      <button type="submit" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
