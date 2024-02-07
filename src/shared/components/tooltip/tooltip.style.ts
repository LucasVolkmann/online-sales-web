import styled from 'styled-components';

export const ExternalContainer = styled.div`
  position: relative;

  &:hover {
    div {
      display: block;
    }
  }
`;

export const TooltipContainer = styled.div`
  display: none;
  z-index: 1;

  position: absolute;
  top: 35px;
  left: 35px;

  width: 200px;
  height: 200px;
  padding: 12px;

  background-color: rgba(0, 0, 0, 0.5);

  border-radius: 20px;
  border-top-left-radius: 0px;
`;
