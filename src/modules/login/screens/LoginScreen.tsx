import { useState } from 'react';

import Button from '../../../shared/components/buttons/button/Button';
import SVGLogo from '../../../shared/components/icons/SVGLogo';
import Input from '../../../shared/components/inputs/input/Input';
import { useRequests } from '../../../shared/hooks/useRequests';
import {
  BackgroundImage,
  ContainerLogin,
  LimitedContainer,
  LoginTitle,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loading, authRequest } = useRequests();

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const login = () => {
    authRequest({
      email,
      password: password,
    });
  };

  return (
    <>
      <BackgroundImage src="./background.jpg" />
      <ContainerLogin>
        <LimitedContainer>
          <SVGLogo width={325} />
          <LoginTitle level={3} type="secondary">
            Acesse sua conta
          </LoginTitle>
          <Input
            type="email"
            label="E-mail"
            margin="20px 0px 0px"
            onChange={handleEmail}
            value={email}
          />
          <Input
            label="Senha"
            isPassword
            margin="20px 0px 0px"
            onChange={handlePassword}
            value={password}
          />
          <Button loading={loading} type="primary" margin="20px 0px 0px" onClick={login}>
            Login
          </Button>
        </LimitedContainer>
      </ContainerLogin>
    </>
  );
};

export default LoginScreen;
