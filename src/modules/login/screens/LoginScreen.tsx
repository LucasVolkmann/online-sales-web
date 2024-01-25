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
  return (
    <div>
      <BackgroundImage src="./background.jpg" />;
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.png" />
          <LoginTitle level={3} type="secondary">
            Login your account
          </LoginTitle>
          <Input label="E-mail" />
          <Input label="Password" isPassword />
          <Button type="primary" margin="10px 0px 10px 0px">
            Login
          </Button>
        </LimitedContainer>
      </ContainerLogin>
    </div>
  );
};

export default LoginScreen;
