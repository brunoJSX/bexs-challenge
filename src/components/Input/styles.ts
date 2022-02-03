import styled, { css } from 'styled-components';

interface IContainerProps {
  isErrored?: boolean;
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<IContainerProps>`
  width: 100%;
  position: relative;
  padding: 0.8rem 0;

  display: flex;
  flex-direction: column;

  label {
    display: flex;
    align-items: center;
    color: #c6c6c6;
    pointer-events: none;
    position: absolute;
    transform: translate(0, 0.5rem) scale(1);

    transform-origin: top left;
    transition: all 0.3s ease-out;

    > svg {
      margin-left: 0.5rem;
    }
  }

  &:focus-within label {
    color: #4bde95;
    transform: translate(0, -1rem) scale(0.75);
  }

  > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 4.5rem;

    input {
      color: #3c3c3c;
      height: 60%;
      border-bottom: 0.1rem solid #c6c6c6;
    }

    input:focus {
      border-bottom: 0.1rem solid #4bde95;
    }

    span:last-child {
      font-size: 1.2rem;
      margin-top: 0.5rem;
    }
  }

  ${props =>
    props.isErrored &&
    css`
      input {
        border-color: #eb5757;
      }

      span:last-child {
        color: #eb5757;
      }
    `}

  ${props =>
    (props.isFilled || props.isFocused) &&
    css`
      label {
        transform: translate(0, -1rem) scale(0.75);
      }
    `};
`;
