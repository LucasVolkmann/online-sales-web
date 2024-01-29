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
import { UserType } from '../types/UserType';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loading, postRequest } = useRequests();

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const login = () => {
    postRequest<UserType>('http://localhost:8080/auth', {
      email,
      password,
    });
  };

  return (
    <>
      <BackgroundImage src="./background.jpg" />
      <ContainerLogin>
        <LimitedContainer>
          <SVGLogo width={325} />
          <LoginTitle level={3} type="secondary">
            Login your account
          </LoginTitle>
          <Input
            type="email"
            label="E-mail"
            margin="20px 0px 0px"
            onChange={handleEmail}
            value={email}
          />
          <Input
            label="Password"
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
