import styled from 'styled-components';

const CONTAINER_WIDTH = 650;

export const BackgroundImage = styled.img`
  position: absolute;
  left: 0px;
  top: 0px;
  width: calc(100% - ${CONTAINER_WIDTH}px);
  height: 100vh;
  object-fit: cover;
`;

export const LogoImage = styled.img`
  width: 150px;
  margin: 25px auto;
  margin-bottom: 50px;
`;

export const ContainerLogin = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  width: 100%;
  max-width: ${CONTAINER_WIDTH}px;
  height: 100vh;
  background-color: rgba(245, 245, 245, 1);
  border-left: 1px solid rgba(200, 200, 200, 1);
  box-shadow: -1px 0px 3px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LimitedContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-bottom: 40%;
`;
