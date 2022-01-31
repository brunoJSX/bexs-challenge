import React, { useMemo } from 'react';

import { Container } from './styles';

type ICreditCardProps = {
  cardNumber?: number;
  name?: string;
  expiration?: string;
};

export function CreditCard({ cardNumber, name, expiration }: ICreditCardProps) {
  const cardNumberFormatted = useMemo(() => {
    if (!cardNumber) {
      return '0000 0000 0000 0000';
    }

    const matches = `${cardNumber}`
      .slice(0, 16)
      .padEnd(16, '0')
      .match(/^(\d{4})(\d{4})(\d{4})(\d{4})$/);

    if (!matches) {
      return cardNumber;
    }

    return `${matches[1]} ${matches[2]} ${matches[3]} ${matches[4]}`;
  }, [cardNumber]);

  return (
    <Container>
      <p>{cardNumberFormatted}</p>

      <div>
        <p>{name || 'NOME DO TITULAR'}</p>
        <p>{expiration || '00/00'}</p>
      </div>
    </Container>
  );
}
