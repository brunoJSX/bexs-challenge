import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: center;
  }

  main {
    margin: 1rem 0;
  }

  footer {
    display: flex;
    justify-content: space-between;

    button + button {
      margin-left: 1rem;
    }
  }
`;
