import React from 'react';

import { Container } from './styles';

type INumberCircleIconProps = {
  number: number;
  size?: number;
  color?: string;
};

export function NumberCircleIcon({ number, ...rest }: INumberCircleIconProps) {
  return (
    <Container {...rest}>
      <span>{number}</span>
    </Container>
  );
}
