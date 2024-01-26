import { Typography } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

const CONTAINER_WIDTH = 700;

export const BackgroundImage = styled.img`
  position: absolute;
  left: 0px;
  top: 0px;
  width: calc(100% - ${CONTAINER_WIDTH}px);
  height: 100vh;
  object-fit: cover;
`;

export const LoginTitle = styled(Title)``;

export const ContainerLogin = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;

  box-sizing: border-box;
  width: 100%;
  padding: 50px;
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
  width: 100%;
  min-width: 250px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
