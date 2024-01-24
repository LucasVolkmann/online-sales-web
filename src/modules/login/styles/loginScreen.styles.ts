import styled from 'styled-components';

export const BackgroundImage = styled.img`
  position: absolute;
  left: 0px;
  top: 0px;
  width: calc(100% - 350px);
  height: 100vh;
  object-fit: cover;
`;

export const LogoImage = styled.img`
  width: 150px;
`;

export const ContainerLogin = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  width: 100%;
  max-width: 350px;
  height: 100vh;
  background-color: rgba(240, 240, 240, 1);
  border-left: 1px solid rgba(200, 200, 200, 1);
  box-shadow: -1px 0px 3px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LimitedContainer = styled.div`
  height: fit-content;
  width: 80%;
  border: 1px solid black;

  display: flex;
  justify-content: center;
`;
