import styled from 'styled-components';

import { WizardFormStep } from '@components/Wizard/WizardFormStep';

export const Container = styled.div`
  background-color: #ffffff;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  height: 35vh;
  color: #ffffff;
  background-color: #4bde95;
  padding: 3rem 1.9rem 0 1.9rem;

  div:first-child {
    display: flex;
    align-items: center;
    margin-bottom: 3.1rem;

    h1 {
      flex: 1;
      text-align: center;
      align-self: center;
      font-size: 1.3rem;
    }
  }

  div:last-child {
    display: flex;
    padding: 0 3rem;

    img {
      width: 3.8rem;
      height: 3.8rem;
    }

    h2 {
      margin-left: 1.7rem;
      flex: 1;
      font-size: 1.6rem;
    }
  }
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 4rem;
  margin-top: -11rem;
`;

export const CreditCardStep = styled(WizardFormStep)`
  form {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    > div:nth-child(3),
    > div:nth-child(4) {
      width: 48%;
    }
  }
`;
