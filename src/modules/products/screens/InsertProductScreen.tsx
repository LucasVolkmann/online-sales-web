import { useEffect, useState } from 'react';

import Button from '../../../shared/components/buttons/button/Button';
import Input from '../../../shared/components/inputs/input/Input';
import Select from '../../../shared/components/inputs/select/Select';
import Screen from '../../../shared/components/screens/Screen';
import { URL_CATEGORY, URL_PRODUCT } from '../../../shared/constants/Urls';
import { InsertProductDTOType } from '../../../shared/dtos/InsertProductDTOType.dto';
import { MethodsEnum } from '../../../shared/enumerations/methods.enum';
import { connectionAPI_POST } from '../../../shared/functions/connection/connectionAPI';
import { useDataContext } from '../../../shared/hooks/useDataContext';
import { useRequests } from '../../../shared/hooks/useRequests';
import { ProductRoutesEnum } from '../routes';
import { LimitedContainer } from '../styles/inserProducts.style';

const InsertProductScreen = () => {
  const [insertProduct, setInsertProduct] = useState<InsertProductDTOType>({
    name: '',
    image: '',
    price: 0,
  });
  const { categories, setCategories } = useDataContext();
  const { request } = useRequests();

  useEffect(() => {
    request(URL_CATEGORY, MethodsEnum.GET, setCategories);
  }, []);

  const handleOnClick = () => {
    connectionAPI_POST(URL_PRODUCT, insertProduct);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
    setInsertProduct({
      ...insertProduct,
      [value]: value === 'price' ? Number(event.target.value) : event.target.value,
    });
  };

  const handleSelectChange = (value: string) => {
    setInsertProduct({
      ...insertProduct,
      categoryId: Number(value),
    });
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
      <LimitedContainer>
        <Input
          onChange={(event) => handleInputChange(event, 'name')}
          margin="0px 0px 16px 0px"
          label="Nome"
        />
        <Input
          onChange={(event) => handleInputChange(event, 'image')}
          margin="0px 0px 16px 0px"
          label="URL da imagem"
        />
        <Input
          onChange={(event) => handleInputChange(event, 'price')}
          margin="0px 0px 16px 0px"
          label="Preço"
        />
        <Select
          label="Categoria"
          margin="0px 0px 16px 0px"
          onChange={handleSelectChange}
          options={categories.map((category) => ({ label: category.name, value: category.id }))}
        />
        <Button onClick={handleOnClick} margin="16px 0px 0px 0px" type="primary">
          Inserir produto
        </Button>
      </LimitedContainer>
    </Screen>
  );
};

export default InsertProductScreen;
