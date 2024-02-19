import { TableColumnsType } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import Screen from '../../../shared/components/screens/Screen';
import { DisplayFlexJCSpaceAround } from '../../../shared/components/styles/display.style';
import { LimitedContainer } from '../../../shared/components/styles/limited.style';
import Table from '../../../shared/components/tables/Table';
import { maskCpf } from '../../../shared/functions/cpf';
import { maskPhone } from '../../../shared/functions/phone';
import { UserType } from '../../../shared/types/UserType';
import FilterInput from '../../products/components/FilterInput';
import { useUser } from '../hooks/useUser';
import { UserRoutesEnum } from '../routes';

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
  const navigate = useNavigate();
  const { users } = useUser();
  const [filtUsers, setFiltUsers] = useState<UserType[]>([]);

  useEffect(() => {
    setFiltUsers(users);
  }, [users]);

  const handleOnSearch = (value: string) => {
    if (!value) {
      setFiltUsers(users);
    } else {
      setFiltUsers(users.filter((user) => user.name.toLowerCase().includes(value.toLowerCase())));
    }
  };

  return (
    <Screen menuCurrentPage="user" listBreadcrumb={[{ name: 'HOME' }, { name: 'USUÁRIOS' }]}>
      <DisplayFlexJCSpaceAround margin="0px 0px 24px">
        <LimitedContainer width="300px">
          <FilterInput placeholder="Buscar Usuário" onSearch={handleOnSearch}></FilterInput>
        </LimitedContainer>

        <LimitedContainer width="250px">
          <Button type="primary" onClick={() => navigate(UserRoutesEnum.USER_INSERT)}>
            Adicionar um novo usuário
          </Button>
        </LimitedContainer>
      </DisplayFlexJCSpaceAround>
      <Table columns={columns} dataSource={filtUsers}></Table>
    </Screen>
  );
};

export default UserScreen;
