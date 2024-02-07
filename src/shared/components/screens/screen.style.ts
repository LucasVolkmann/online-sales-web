import styled from 'styled-components';

export const ScreenContainer = styled.div`
  height: 100%;

  padding: 32px;
`;

export const MainContent = styled.div`
  width: calc(100% - 250px);
  padding: 32px;
  margin-left: auto;

  border: 1px solid #d3d3d3;
  border-radius: 5px;

  background-color: white;

  -webkit-box-shadow: 0px 0px 10px 0px rgba(138, 138, 138, 0.3);
  -moz-box-shadow: 0px 0px 10px 0px rgba(138, 138, 138, 0.3);
  box-shadow: 0px 0px 10px 0px rgba(138, 138, 138, 0.3);
`;
