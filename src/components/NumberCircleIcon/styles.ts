import styled from 'styled-components';

export const Container = styled.div.attrs(
  (props: { color: string; size: number }) => props,
)`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ color }) => color || '#000000'};
  border: 0.13rem solid ${({ color }) => color || '#000000'};
  border-radius: 50%;
  width: ${({ size }) => size || 2}rem;
  height: ${({ size }) => size || 2}rem;
`;
