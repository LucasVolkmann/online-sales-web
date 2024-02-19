import Screen from '../../../shared/components/screens/Screen';

const UserScreen = () => {
  return (
    <Screen menuCurrentPage="users" listBreadcrumb={[{ name: 'HOME' }, { name: 'USUÁRIOS' }]}>
      <a>User screen</a>
    </Screen>
  );
};

export default UserScreen;
