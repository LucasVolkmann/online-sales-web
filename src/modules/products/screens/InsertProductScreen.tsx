import Screen from '../../../shared/components/screens/Screen';
import { ProductRoutesEnum } from '../routes';

const InsertProductScreen = () => {
  return (
    <Screen
      listBreadcrumb={[
        {
          name: 'HOME',
        },
        {
          name: 'PRODUTOS',
          navigateTo: ProductRoutesEnum.PRODUCT,
        },
        {
          name: 'INSERIR PRODUTOS',
        },
      ]}
    >
      <h1>Página para inserir produtos</h1>
    </Screen>
  );
};

export default InsertProductScreen;
