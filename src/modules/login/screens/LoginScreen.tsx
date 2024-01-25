import Input from '../../../shared/inputs/input/Input';
import {
  BackgroundImage,
  ContainerLogin,
  LimitedContainer,
  LogoImage,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  return (
    <div>
      <BackgroundImage src="./background.jpg" />;
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.png" />
          <Input label="E-mail" />
          <Input label="Password" isPassword={true} />
        </LimitedContainer>
      </ContainerLogin>
    </div>
  );
};

export default LoginScreen;
