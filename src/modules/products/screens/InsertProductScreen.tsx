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
          name: 'INSERIR PRODUTO',
        },
      ]}
    >
      <h1>Página para inserir produto</h1>
    </Screen>
  );
};

export default InsertProductScreen;
