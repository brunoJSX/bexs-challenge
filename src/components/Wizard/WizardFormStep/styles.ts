import styled from 'styled-components';

export const Container = styled.div`
  color: #ffffff;

  footer {
    display: flex;
    justify-content: space-between;

    button + button {
      margin-left: 1rem;
    }
  }
`;
