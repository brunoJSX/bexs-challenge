import React, { FormEvent, useCallback, useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { BsInfoCircleFill } from 'react-icons/bs';
import Yup from '@utils/schemaValidator';

import CreditCardIcon from '@assets/icons/credit_card_icon.svg';

import { CreditCard } from '@components/CreditCard';
import { Wizard } from '@components/Wizard';
import { WizardFormStep } from '@components/Wizard/WizardFormStep';
import { Input } from '@components/Input';

import { Container, Header, Content, CreditCardStep } from './styles';

const schema = Yup.object({
  cardNumber: Yup.string().required(),
  personName: Yup.string().required(),
  cardExpiration: Yup.string().required(),
  cardCvv: Yup.string().required(),
  installments: Yup.string(),
}).required();

export function CreditCardAdd() {
  const [cardNumber, setCardNumber] = useState(0);
  const [personName, setPersonName] = useState('');
  const [cardExpiration, setCardExpiration] = useState({
    month: 0,
    year: 0,
  });

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
          <h1>Etapa 2 de 3</h1>
        </div>

        <div>
          <img src={CreditCardIcon} alt="Credit card icon" />
          <h2>Adicione um novo cartão de crédito</h2>
        </div>
      </Header>

      <Content>
        <CreditCard
          cardNumber={cardNumber}
          personName={personName}
          cardExpiration={cardExpiration}
        />

        <Wizard hiddenProgressBar>
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
            />

            <Input
              label="Número de parcelas"
              name="installments"
              defaultValue=""
            />
          </CreditCardStep>

          <WizardFormStep title="Pagamento">
            <Input label="Name2" name="name2" defaultValue="" />
            <Input label="Sobrenome" name="lastName2" defaultValue="" />
          </WizardFormStep>

          <WizardFormStep title="Confirmação">
            <Input label="Name3" name="name3" defaultValue="" />
            <Input label="Sobrenome" name="lastName3" defaultValue="" />
          </WizardFormStep>
        </Wizard>
      </Content>
    </Container>
  );
}
