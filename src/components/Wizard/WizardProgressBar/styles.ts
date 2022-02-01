import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  color: #4bde95;

  div {
    display: flex;

    span:nth-child(2) {
      margin-left: 0.8rem;
    }

    svg:last-child {
      margin: 0 3.3rem;
    }
  }
`;
