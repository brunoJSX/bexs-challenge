import styled, { css } from 'styled-components';

interface IContainerProps {
  isErrored?: boolean;
}

export const Container = styled.div<IContainerProps>`
  width: 100%;
  position: relative;
  padding: 1rem 0;

  .react-select {
    &__control {
      min-height: auto;
      border: 0;
      border-radius: 0;
      border-bottom: 0.1rem solid #c6c6c6;

      &--is-focused {
        box-shadow: none;

        .react-select__indicator {
          > svg {
            color: #4bde95;
          }
        }
      }
    }

    &__value-container {
      padding: 0;
    }

    &__single-value {
      margin-left: 0;
    }

    &__indicator {
      padding: 0.45rem 0 0.5rem;

      > svg {
        color: #c6c6c6;
      }
    }

    &__menu {
      z-index: 2;
    }
  }
`;

export const Label = styled.label<{ isFloating?: boolean }>`
  position: absolute;

  color: #c6c6c6;
  pointer-events: none;
  transform: translate(0, 0.5rem) scale(1);

  transform-origin: top left;
  transition: all 0.3s ease-out;

  z-index: 1;

  ${({ isFloating }) =>
    isFloating &&
    css`
      color: #c6c6c6;
      transform: translate(0, -1rem) scale(0.75);
    `}
`;
