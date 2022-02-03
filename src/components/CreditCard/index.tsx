import React, { useEffect, useState } from 'react';

import VisaIcon from '@assets/icons/visa_icon.svg';
import MastercadIcon from '@assets/icons/mastercard_icon.svg';

import { cardMask, expirationMask, cvvMask } from './mask';

import { Container, CardFrontContainer, CardBackContainer } from './styles';

type IBrand = {
  name: 'visa' | 'mastercard';
  icon: string;
  regexValidation: RegExp;
  description: string;
};

const brands: IBrand[] = [
  {
    name: 'visa',
    icon: VisaIcon,
    regexValidation: /^4[0-9]{12}(?:[0-9]{3})?$/,
    description: 'Brand of credit cards issued by Visa.',
  },
  {
    name: 'mastercard',
    icon: MastercadIcon,
    regexValidation:
      /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/,
    description: 'Brand of credit cards issued by Mastercard.',
  },
];

export type ICardExpiration = { month: number; year: number };

type ICreditCardProps = {
  cardNumber?: number;
  personName?: string;
  cardExpiration?: ICardExpiration;
  cardCvv?: string;
  side?: 'front' | 'back';
};

export function CreditCard({
  cardNumber,
  personName,
  cardExpiration,
  cardCvv,
  side = 'front',
}: ICreditCardProps) {
  const [card, setCard] = useState<IBrand | undefined>(undefined);

  useEffect(() => {
    const cardSelected = brands.find(brand => {
      if (!cardNumber) return false;

      const cardNumberFormatted = cardNumber
        .toString()
        .replace(/\D/g, '')
        .padEnd(16, '0');

      return brand.regexValidation.test(cardNumberFormatted);
    });

    setCard(cardSelected);
  }, [cardExpiration, cardNumber]);

  return (
    <Container side={side}>
      <div>
        <CardFrontContainer isDefinedBrand={!!card}>
          <div>{card && <img src={card.icon} alt={card.description} />}</div>

          <section>
            <h1>{cardMask(cardNumber)}</h1>

            <div>
              <h2>{personName?.toUpperCase() || 'NOME DO TITULAR'}</h2>
              <h2>{expirationMask(cardExpiration)}</h2>
            </div>
          </section>
        </CardFrontContainer>

        <CardBackContainer isDefinedBrand={!!card}>
          <span>{cvvMask(cardCvv)}</span>
        </CardBackContainer>
      </div>
    </Container>
  );
}
