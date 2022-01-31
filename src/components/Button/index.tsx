import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function Button({ children, ...rest }: IButtonProps) {
  return (
    <Container type="button" {...rest}>
      <span>{children}</span>
    </Container>
  );
}
