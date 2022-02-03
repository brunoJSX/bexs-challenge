import React, { FormEvent, useCallback, useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { BsInfoCircleFill } from 'react-icons/bs';
import Yup from '@utils/schemaValidator';

import CreditCardIcon from '@assets/icons/credit_card_icon.svg';

import { CreditCard } from '@components/CreditCard';
import { Input } from '@components/Input';

import { Select } from '@components/Select';
import {
  Container,
  Header,
  Content,
  WizardStyled,
  CreditCardStep,
  PaymentStep,
  ConfirmationStep,
} from './styles';

const schema = Yup.object({
  cardNumber: Yup.string().required(),
  personName: Yup.string().required(),
  cardExpiration: Yup.string().required(),
  cardCvv: Yup.string().required(),
  installments: Yup.string(),
}).required();

const installmentsOptions = [
  { value: 1, label: '1x R$ 12.000,00 à vista' },
  { value: 2, label: '2x de R$ 6.000,00 sem juros' },
  { value: 3, label: '3x de R$ 4.000,00 sem juros' },
  { value: 4, label: '4x de R$ 3.000,00  sem juros' },
  { value: 5, label: '5x de R$ 2.400,00  sem juros' },
  { value: 6, label: '6x de R$ 2.000,00  sem juros' },
  { value: 7, label: '7x de R$ 1.714,29  sem juros' },
  { value: 8, label: '8x de R$ 1.500,00  sem juros' },
  { value: 9, label: '9x de R$ 1.333,33  sem juros' },
  { value: 10, label: '10x de R$ 1.200,00  sem juros' },
  { value: 11, label: '11x de R$ 1.090,90  sem juros' },
  { value: 12, label: '12x de R$ 1.000,00  sem juros' },
];

export function CreditCardAdd() {
  const [cvvIsFocused, setCvvIsFocused] = useState(false);
  const [cardNumber, setCardNumber] = useState(0);
  const [personName, setPersonName] = useState('');
  const [cardExpiration, setCardExpiration] = useState({
    month: 0,
    year: 0,
  });
  const [cardCvv, setCardCvv] = useState('');

  const handleExpirationDate = useCallback((e: FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    const [month, year] = value.split('/');

    setCardExpiration({
      month: Number(month) || 0,
      year: Number(year) || 0,
    });
  }, []);

  return (
    <Container>
      <Header>
        <div>
          <FiChevronLeft size={26} />
          <h1>Etapa 1 de 3</h1>
          <h1>Alterar forma de pagamento</h1>
        </div>

        <div>
          <img src={CreditCardIcon} alt="Credit card icon" />
          <h2>Adicione um novo cartão de crédito</h2>
        </div>

        <div>
          <CreditCard
            cardNumber={cardNumber}
            personName={personName}
            cardExpiration={cardExpiration}
            cardCvv={cardCvv}
            side={cvvIsFocused ? 'back' : 'front'}
          />
        </div>
      </Header>

      <Content>
        <WizardStyled>
          <CreditCardStep title="Carrinho" schemaValidation={schema}>
            <Input
              label="Número do cartão"
              name="cardNumber"
              mask="creditCardNumber"
              defaultValue=""
              onChange={e => setCardNumber(e.currentTarget.value)}
            />
            <Input
              label="Nome (igual ao cartão)"
              name="personName"
              maxLength={35}
              defaultValue=""
              onChange={e => setPersonName(e.currentTarget.value)}
            />

            <Input
              label="Validade"
              name="cardExpiration"
              mask="creditCardExpirationDate"
              defaultValue=""
              onChange={handleExpirationDate}
            />

            <Input
              label="CVV"
              labelIconRight={<BsInfoCircleFill size={12} />}
              name="cardCvv"
              defaultValue=""
              maxLength={3}
              onFocus={() => setCvvIsFocused(true)}
              onBlur={() => setCvvIsFocused(false)}
              onChange={e => setCardCvv(e.currentTarget.value)}
            />

            <Select
              label="Número de parcelas"
              name="installments"
              options={installmentsOptions}
            />
          </CreditCardStep>

          <PaymentStep title="Pagamento">
            <p>Payment step in development</p>
          </PaymentStep>

          <ConfirmationStep title="Confirmação">
            <p>Confirmation step in development</p>
          </ConfirmationStep>
        </WizardStyled>
      </Content>
    </Container>
  );
}
