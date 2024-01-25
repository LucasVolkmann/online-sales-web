import { useState } from 'react';

import Button from '../../../shared/buttons/button/Button';
import Input from '../../../shared/inputs/input/Input';
import {
  BackgroundImage,
  ContainerLogin,
  LimitedContainer,
  LoginTitle,
  LogoImage,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const login = () => {
    alert(`email: ${email}\npassword: ${password}`);
  };

  return (
    <div>
      <BackgroundImage src="./background.jpg" />
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.png" />
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
          <Button type="primary" margin="20px 0px 0px" onClick={login}>
            Login
          </Button>
        </LimitedContainer>
      </ContainerLogin>
    </div>
  );
};

export default LoginScreen;
