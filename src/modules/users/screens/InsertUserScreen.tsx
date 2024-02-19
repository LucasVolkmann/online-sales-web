import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import Input from '../../../shared/components/inputs/input/Input';
import Screen from '../../../shared/components/screens/Screen';
import {
  DisplayFlexJCSpaceAround,
  DisplayFlexJustifyCenter,
} from '../../../shared/components/styles/display.style';
import { OutsideFormDivClass } from '../../../shared/components/styles/insertProducts.style';
import { LimitedContainer } from '../../../shared/components/styles/limited.style';
import { useInsertUser } from '../hooks/useInsertUser';
import { UserRoutesEnum } from '../routes';

const InsertUserScreen = () => {
  const navigate = useNavigate();
  const { insertUser, handleOnChange, handleOnClick, disabled, loading } = useInsertUser();

  return (
    <Screen
      menuCurrentPage="user"
      listBreadcrumb={[
        { name: 'HOME' },
        { name: 'USUÁRIOS', navigateTo: UserRoutesEnum.USER },
        { name: 'INSERIR USUÁRIO' },
      ]}
    >
      <DisplayFlexJustifyCenter margin="64px">
        <LimitedContainer width={'400px'} style={OutsideFormDivClass}>
          <Input
            value={insertUser.name}
            onChange={(event) => handleOnChange(event, 'name')}
            margin="0px 0px 16px 0px"
            label="Nome"
          />
          <Input
            value={insertUser.password}
            onChange={(event) => handleOnChange(event, 'password')}
            margin="0px 0px 16px 0px"
            label="Senha"
          />
          <Input
            value={insertUser.email}
            onChange={(event) => handleOnChange(event, 'email')}
            margin="0px 0px 16px 0px"
            label="E-mail"
          />
          <Input
            value={insertUser.phone}
            onChange={(event) => handleOnChange(event, 'phone')}
            margin="0px 0px 16px 0px"
            label="Telefone"
          />
          <Input
            value={insertUser.cpf}
            onChange={(event) => handleOnChange(event, 'cpf')}
            margin="0px 0px 16px 0px"
            label="CPF"
          />

          <DisplayFlexJCSpaceAround>
            <LimitedContainer width={'150px'}>
              <Button
                disabled={disabled}
                loading={loading}
                onClick={handleOnClick}
                margin="16px 0px 0px 0px"
                type="primary"
              >
                Inserir usuário
              </Button>
            </LimitedContainer>
            <LimitedContainer width={'150px'}>
              <Button
                danger
                onClick={() => navigate(UserRoutesEnum.USER)}
                margin="16px 0px 0px 0px"
              >
                Cancelar
              </Button>
            </LimitedContainer>
          </DisplayFlexJCSpaceAround>
        </LimitedContainer>
      </DisplayFlexJustifyCenter>
    </Screen>
  );
};

export default InsertUserScreen;
