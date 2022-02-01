import styled from 'styled-components';

export const Container = styled.div`
  color: #ffffff;
`;

type IFooterProps = {
  isFirstStep: boolean;
};

export const Footer = styled.footer<IFooterProps>`
  flex: 1;
  display: flex;
  justify-content: ${({ isFirstStep }) =>
    isFirstStep ? 'center' : 'space-between'};
  padding-top: 3.4rem;

  button + button {
    margin-left: 1rem;
  }
`;
