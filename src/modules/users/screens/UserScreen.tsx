import { TableColumnsType } from 'antd';

import Screen from '../../../shared/components/screens/Screen';
import Table from '../../../shared/components/tables/Table';
import { maskCpf } from '../../../shared/functions/cpf';
import { maskPhone } from '../../../shared/functions/phone';
import { UserType } from '../../../shared/types/UserType';
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
  const { users } = useUser();

  return (
    <Screen menuCurrentPage="users" listBreadcrumb={[{ name: 'HOME' }, { name: 'USUÁRIOS' }]}>
      <Table columns={columns} dataSource={users}></Table>
    </Screen>
  );
};

export default UserScreen;
