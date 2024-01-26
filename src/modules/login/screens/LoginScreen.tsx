import axios from 'axios';
import { useState } from 'react';

import Button from '../../../shared/buttons/button/Button';
import SVGLogo from '../../../shared/icons/SVGLogo';
import Input from '../../../shared/inputs/input/Input';
import {
  BackgroundImage,
  ContainerLogin,
  LimitedContainer,
  LoginTitle,
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

  const login = async () => {
    await axios({
      method: 'post',
      url: 'http://localhost:8080/auth',
      data: {
        email: email,
        password: password,
      },
    })
      .then((res) => {
        alert(`Login has been success. \n Access token: ${res.data.accessToken}`);
      })
      .catch((err) => {
        alert('Invalid credentials.');
        // eslint-disable-next-line no-console
        console.error(err);
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
          <Button type="primary" margin="20px 0px 0px" onClick={login}>
            Login
          </Button>
        </LimitedContainer>
      </ContainerLogin>
    </>
  );
};

export default LoginScreen;
