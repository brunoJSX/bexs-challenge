import styled, { css } from 'styled-components';

type IContainerProps = {
  isDefinedBrand?: boolean;
};

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 280px;
  height: 171.98px;
  border-radius: 1rem;
  color: #ffffff;
  padding: 2rem 1.5rem 3rem 1.5rem;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.349));
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);

  background: radial-gradient(
    73.06% 104.31% at 14.59% 58.06%,
    #bfbfbf 0%,
    #bfbfbf 0.01%,
    #a8a8a8 33.7%,
    #727272 100%
  );

  ${({ isDefinedBrand }) =>
    isDefinedBrand &&
    css`
      background: radial-gradient(
        73.06% 104.31% at 14.59% 58.06%,
        #5a7589 0%,
        #436175 33.7%,
        #315266 57.29%,
        #124768 100%
      );
    `}

  div:first-child {
    img {
      max-width: 5.5rem;
    }
  }

  section {
    > p {
      font-size: 1.4rem;
    }

    > div {
      display: flex;
      justify-content: space-between;
      margin-top: 1.5rem;

      > p {
        font-size: 1.2rem;
      }

      p:first-child {
        white-space: nowrap;
        flex: 0 0 80%;
        overflow: hidden;
      }
    }
  }
`;
