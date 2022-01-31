import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 280px;
  height: 171.98px;
  border-radius: 1.5rem;
  color: #ffffff;
  padding: 2rem 1.5rem 3rem 1.5rem;

  background: radial-gradient(
    73.06% 104.31% at 14.59% 58.06%,
    #5a7589 0%,
    #436175 33.7%,
    #315266 57.29%,
    #124768 100%
  );

  div:first-child {
    img {
      max-width: 5.5rem;
    }
  }

  section {
    div {
      display: flex;
      justify-content: space-between;
      margin-top: 1.5rem;

      p:first-child {
        white-space: nowrap;
        flex: 0 0 80%;
        overflow: hidden;
      }
    }
  }
`;
