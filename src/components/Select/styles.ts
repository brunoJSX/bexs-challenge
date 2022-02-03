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
      box-shadow: none;
      border-radius: 0;

      border-bottom: 0.1rem solid
        ${({ isErrored }) => (isErrored ? '#eb5757' : '#c6c6c6')};

      &--is-focused {
        border-bottom: 0.1rem solid
          ${({ isErrored }) => (isErrored ? '#eb5757' : '#4bde95')};

        &:hover {
          border-bottom: 0.1rem solid
            ${({ isErrored }) => (isErrored ? '#eb5757' : '#4bde95')};
        }

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

type ILabelProps = {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
};

export const Label = styled.label<ILabelProps>`
  position: absolute;

  color: ${({ isFocused }) => (isFocused ? '#4bde95' : '#c6c6c6')};
  pointer-events: none;
  transform: translate(0, 0.5rem) scale(1);

  transform-origin: top left;
  transition: all 0.3s ease-out;

  z-index: 1;

  ${({ isFocused, isFilled }) =>
    (isFocused || isFilled) &&
    css`
      transform: translate(0, -1rem) scale(0.75);
    `}

  ${({ isFocused, isErrored }) =>
    isFocused &&
    isErrored &&
    css`
      color: #eb5757;
    `}
`;

export const Error = styled.span`
  color: #eb5757;
  font-size: 1.2rem;
  margin-top: 0.5rem;
`;
