import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 280px;
  height: 171.98px;
  border-radius: 15px;
  color: #ffffff;
  padding: 0 15px 30px 15px;

  background: radial-gradient(
    73.06% 104.31% at 14.59% 58.06%,
    #bfbfbf 0%,
    #bfbfbf 0.01%,
    #a8a8a8 33.7%,
    #727272 100%
  );

  > div {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }
`;
