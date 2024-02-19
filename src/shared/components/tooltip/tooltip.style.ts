import styled from 'styled-components';

export const ExternalContainer = styled.div`
  position: relative;
  width: fit-content;

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
  top: calc(-94px - 50%);
  left: calc(100% + 35px);

  width: 200px;
  height: 200px;
  padding: 12px;

  background-color: rgba(0, 0, 0, 0.5);

  border-radius: 20px;
  &:after {
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-right: 25px solid rgba(0, 0, 0, 0.5);
    border-bottom: 15px solid transparent;
    content: ' ';
    position: absolute;
    top: calc(50% - 10px);
    right: 100%;
  }

  @keyframes pop {
    0% {
      scale: 0;
    }
    100% {
      scale: 1;
    }
  }

  animation: pop 0.07s;
`;
