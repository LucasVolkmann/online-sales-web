import { Select } from 'antd';
import { useEffect } from 'react';

import Button from '../../../shared/components/buttons/button/Button';
import Input from '../../../shared/components/inputs/input/Input';
import Screen from '../../../shared/components/screens/Screen';
import { URL_CATEGORY } from '../../../shared/constants/Urls';
import { MethodsEnum } from '../../../shared/enumerations/methods.enum';
import { useDataContext } from '../../../shared/hooks/useDataContext';
import { useRequests } from '../../../shared/hooks/useRequests';
import { ProductRoutesEnum } from '../routes';
import { LimitedContainer } from '../styles/inserProducts.style';

const InsertProductScreen = () => {
  const { categories, setCategories } = useDataContext();
  const { request } = useRequests();

  useEffect(() => {
    request(URL_CATEGORY, MethodsEnum.GET, setCategories);
  }, []);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

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
      <LimitedContainer>
        <Input margin="0px 0px 16px 0px" label="Nome" />
        <Input margin="0px 0px 16px 0px" label="URL da imagem" />
        <Input margin="0px 0px 27px 0px" label="Preço" />
        <Select
          defaultValue="Categoria"
          style={{ width: '100%', marginBottom: '32px' }}
          onChange={handleChange}
          options={categories.map((category) => ({ label: category.name, value: category.id }))}
        />
        <Button type="primary">Inserir produto</Button>
      </LimitedContainer>
    </Screen>
  );
};

export default InsertProductScreen;
