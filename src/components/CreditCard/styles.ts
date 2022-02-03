/* eslint-disable prettier/prettier */
import styled, { css } from 'styled-components';

import CardFrontEmpty from '@assets/icons/card-front-empty.svg';
import CardBackEmpty from '@assets/icons/card_back_empty.svg';
import CardFront from '@assets/icons/card_front.svg';
import CardBack from '@assets/icons/card_back.svg';

type IContainerProps = {
  side: 'front' | 'back';
};

export const Container = styled.div<IContainerProps>`
  perspective: 1000px;
  width: 100vw;
  height: calc(100vw * 0.6142);

  > div {
    transition: transform 0.6s;
    transform-style: preserve-3d;
    transform: ${({ side }) =>
    side === 'back' ? 'rotateY(180deg)' : 'rotateY(0deg)'};

    width: 100%;
    height: 100%;
    color: #ffffff;
  }
`;

type ICardProps = {
  isDefinedBrand?: boolean;
};

export const CardFrontContainer = styled.div<ICardProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 1rem;
  padding: 2rem 1.5rem 3rem 1.5rem;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.349));
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);

  background: url(${CardFrontEmpty}),
    radial-gradient(
      73.06% 104.31% at 14.59% 58.06%,
      #bfbfbf 0%,
      #bfbfbf 0.01%,
      #a8a8a8 33.7%,
      #727272 100%
    );
  background-size: contain;
  background-repeat: no-repeat;

  ${({ isDefinedBrand }) =>
    isDefinedBrand &&
    css`
      background: url(${CardFront}),
        radial-gradient(
          73.06% 104.31% at 14.59% 58.06%,
          #5a7589 0%,
          #436175 33.7%,
          #315266 57.29%,
          #124768 100%
        );
      background-size: contain;
      background-repeat: no-repeat;
    `}

  div:first-child {
    img {
      max-width: 5.5rem;
    }
  }

  section {
    > h1 {
      font-size: 1.4rem;
      font-weight: 400;
    }

    > div {
      display: flex;
      justify-content: space-between;
      margin-top: 1.5rem;

      > h2 {
        font-size: 1.2rem;
        font-weight: 400;
      }

      h2:first-child {
        white-space: nowrap;
        flex: 0 0 80%;
        overflow: hidden;
      }
    }
  }
`;

export const CardBackContainer = styled.div<ICardProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  transform: rotateY(180deg);
  border-radius: 1rem;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.349));

  > span {
    position: absolute;
    color: #3c3c3c;

    top: ${({ isDefinedBrand }) => (isDefinedBrand ? '48%' : '48%')};
    left: ${({ isDefinedBrand }) => (isDefinedBrand ? '50%' : '50%')};
  }

  background: url(${CardBackEmpty}),
    radial-gradient(
      73.06% 104.31% at 14.59% 58.06%,
      #bfbfbf 0%,
      #bfbfbf 0.01%,
      #a8a8a8 33.7%,
      #727272 100%
    );
  background-size: contain;
  background-repeat: no-repeat;

  ${({ isDefinedBrand }) =>
    isDefinedBrand &&
    css`
      background: url(${CardBack}),
        radial-gradient(
          73.06% 104.31% at 14.59% 58.06%,
          #5a7589 0%,
          #436175 33.7%,
          #315266 57.29%,
          #124768 100%
        );
      background-size: contain;
      background-repeat: no-repeat;
    `}
`;
