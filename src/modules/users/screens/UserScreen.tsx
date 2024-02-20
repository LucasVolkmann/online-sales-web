import { TableColumnsType } from 'antd';
import { useEffect, useMemo } from 'react';

import Button from '../../../shared/components/buttons/button/Button';
import Screen from '../../../shared/components/screens/Screen';
import { DisplayFlexJCSpaceAround } from '../../../shared/components/styles/display.style';
import { LimitedContainer } from '../../../shared/components/styles/limited.style';
import Table from '../../../shared/components/tables/Table';
import { URL_USER_ALL } from '../../../shared/constants/Urls';
import { MethodsEnum } from '../../../shared/enumerations/methods.enum';
import { UserTypeEnum } from '../../../shared/enumerations/userType.enum';
import { getTokenUserData } from '../../../shared/functions/connection/auth';
import { maskCpf } from '../../../shared/functions/cpf';
import { maskPhone } from '../../../shared/functions/phone';
import { useRequests } from '../../../shared/hooks/useRequests';
import { UserType } from '../../../shared/types/UserType';
import FilterInput from '../../products/components/FilterInput';
import { useUser } from '../hooks/useUser';

const columns: TableColumnsType<UserType> = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Nome do usuário',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'E-mail',
    dataIndex: 'email',
    key: 'email',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Telefone',
    dataIndex: 'phone',
    key: 'phone',
    render: (text) => <a>{maskPhone(text)}</a>,
  },
  {
    title: 'CPF',
    dataIndex: 'cpf',
    key: 'cpf',
    render: (text) => <a>{maskCpf(text)}</a>,
  },
];

const UserScreen = () => {
  const { filtUsers, setUsers, handleOnSearch, handleInsertAdminOnClick } = useUser();
  const userData = useMemo(() => getTokenUserData(), []);
  const { request } = useRequests();

  useEffect(() => {
    request(URL_USER_ALL, MethodsEnum.GET, setUsers);
  }, []);

  return (
    <Screen menuCurrentPage="user" listBreadcrumb={[{ name: 'HOME' }, { name: 'USUÁRIOS' }]}>
      <DisplayFlexJCSpaceAround margin="0px 0px 24px">
        <LimitedContainer width="300px">
          <FilterInput placeholder="Buscar Usuário" onSearch={handleOnSearch}></FilterInput>
        </LimitedContainer>

        <LimitedContainer width="250px">
          {userData?.typeUser == UserTypeEnum.ROOT && (
            <Button type="primary" onClick={() => handleInsertAdminOnClick(userData)}>
              Adicionar um novo administrador
            </Button>
          )}
        </LimitedContainer>
      </DisplayFlexJCSpaceAround>
      <Table columns={columns} dataSource={filtUsers}></Table>
    </Screen>
  );
};

export default UserScreen;
