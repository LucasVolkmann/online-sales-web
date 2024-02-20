import { WarningOutlined } from '@ant-design/icons';
import { Result } from 'antd';
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
import { useInsertAdmin } from '../hooks/useInsertAdmin';
import { UserRoutesEnum } from '../routes';

const NOT_IMPLEMENTED = false;

const InsertAdminScreen = () => {
  const navigate = useNavigate();
  const { insertAdmin, handleOnChange, handleOnClick, disabled, loading } = useInsertAdmin();

  if (NOT_IMPLEMENTED) {
    return (
      <DisplayFlexJustifyCenter style={{ paddingTop: '200px' }}>
        <Result
          icon={<WarningOutlined />}
          title="Que pena! Esta página ainda não foi implementada."
          extra={
            <Button type="primary" onClick={() => navigate(UserRoutesEnum.USER)}>
              Voltar
            </Button>
          }
        />
      </DisplayFlexJustifyCenter>
    );
  } else {
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
              value={insertAdmin.name}
              onChange={(event) => handleOnChange(event, 'name')}
              margin="0px 0px 16px 0px"
              label="Nome"
            />
            <Input
              value={insertAdmin.password}
              onChange={(event) => handleOnChange(event, 'password')}
              margin="0px 0px 16px 0px"
              label="Senha"
            />
            <Input
              value={insertAdmin.email}
              onChange={(event) => handleOnChange(event, 'email')}
              margin="0px 0px 16px 0px"
              label="E-mail"
            />
            <Input
              value={insertAdmin.phone}
              onChange={(event) => handleOnChange(event, 'phone')}
              margin="0px 0px 16px 0px"
              label="Telefone"
            />
            <Input
              value={insertAdmin.cpf}
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
  }
};

export default InsertAdminScreen;
