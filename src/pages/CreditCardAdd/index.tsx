import React, { FormEvent, useCallback, useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { BsInfoCircleFill } from 'react-icons/bs';
import Yup from '@utils/schemaValidator';

import CreditCardIcon from '@assets/icons/credit_card_icon.svg';

import { CreditCard } from '@components/CreditCard';
import { Input } from '@components/Input';

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

            <Input
              label="Número de parcelas"
              name="installments"
              defaultValue=""
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
