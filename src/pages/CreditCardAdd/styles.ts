import styled from 'styled-components';

import { Wizard } from '@components/Wizard';
import { WizardFormStep } from '@components/Wizard/WizardFormStep';

export const Container = styled.div`
  width: 100%;
  display: flex;

  background-color: #ffffff;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const Header = styled.header`
  position: relative;
  height: 38vh;
  max-height: 26.9rem;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  background-color: #4bde95;
  padding: 3rem 1.9rem 0 1.9rem;

  @media (min-width: 1024px) {
    width: 31.7vw;
    height: 100vh;
    max-height: unset;
    max-width: 36rem;
    padding: 5rem 1.9rem 0 1.9rem;
  }

  > div:first-child {
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

  > div:nth-child(2) {
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

  > div:last-child {
    position: absolute;
    display: flex;
    justify-content: center;

    > div {
      width: 77.77vw;
      height: calc(77.77vw * 0.6142);
    }

    bottom: calc(((77.77vw * 0.6142) * 0.45) * (-1));
    left: 0;
    right: 0;

    @media (min-width: 480px) {
      bottom: calc((22.6rem * 0.45) * (-1));

      > div {
        max-width: 37.5rem;
        max-height: 22.6rem;
      }
    }

    @media (min-width: 1024px) {
      position: relative;
      width: calc(31rem * 1.58);
      bottom: unset;
      padding-top: 3.2rem;

      > div {
        height: 31rem;
        max-width: unset;
        max-height: unset;
      }
    }
  }
`;

export const Content = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10rem 4rem 0;

  @media (min-width: 1024px) {
    /* padding-left: calc(31.7vw * 0.51 + 4rem); */
    padding-left: 20.3rem;
    padding-top: 5rem;
  }
`;

export const WizardStyled = styled(Wizard)`
  /* border: 1px solid red; */
  > header {
    display: none;
  }

  @media (min-width: 1024px) {
    /* width: 50rem; */
    max-width: 70rem;

    > header {
      display: unset;
    }
  }
  }
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

  @media (min-width: 1024px) {
    padding-top: 5.2rem;

    footer {
      justify-content: flex-end;
    }
  }
`;

export const PaymentStep = styled(WizardFormStep)`
  color: #3c3c3c;
  text-align: center;

  @media (min-width: 1024px) {
    padding-top: 5.2rem;
  }
`;

export const ConfirmationStep = styled(WizardFormStep)`
  color: #3c3c3c;
  text-align: center;

  @media (min-width: 1024px) {
    padding-top: 5.2rem;
  }
`;
