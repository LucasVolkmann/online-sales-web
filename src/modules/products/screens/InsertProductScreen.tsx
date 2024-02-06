import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import Input from '../../../shared/components/inputs/input/Input';
import InputMoney from '../../../shared/components/inputs/inputMoney/InputMoney';
import Select from '../../../shared/components/inputs/select/Select';
import Screen from '../../../shared/components/screens/Screen';
import { DisplayFlexJCSpaceAround } from '../../../shared/components/styles/display.style';
import { LimitedContainer } from '../../../shared/components/styles/limited.style';
import { URL_CATEGORY, URL_PRODUCT } from '../../../shared/constants/Urls';
import { InsertProductDTOType } from '../../../shared/dtos/InsertProductDTOType.dto';
import { MethodsEnum } from '../../../shared/enumerations/methods.enum';
import { connectionAPI_POST } from '../../../shared/functions/connection/connectionAPI';
import { useDataContext } from '../../../shared/hooks/useDataContext';
import { useGlobalContext } from '../../../shared/hooks/useGlobalContext';
import { useRequests } from '../../../shared/hooks/useRequests';
import { ProductType } from '../../../shared/types/ProductType';
import { ProductRoutesEnum } from '../routes';
import { InsertProductScreenContainer, OutsideFormDivClass } from '../styles/insertProducts.style';

const InsertProductScreen = () => {
  const [insertProduct, setInsertProduct] = useState<InsertProductDTOType>({
    name: '',
    image: '',
    price: 0,
  });
  const { categories, setCategories } = useDataContext();
  const { setNotification } = useGlobalContext();
  const { request } = useRequests();
  const navigate = useNavigate();

  useEffect(() => {
    request(URL_CATEGORY, MethodsEnum.GET, setCategories);
  }, []);

  const handleOnClick = async () => {
    await connectionAPI_POST<ProductType>(URL_PRODUCT, insertProduct)
      .then((res) => {
        setNotification({
          message: 'Sucesso!',
          type: 'success',
          description: `'${res.name}' foi inserido com sucesso!`,
        });
        navigate(ProductRoutesEnum.PRODUCT);
      })
      .catch((err) => {
        setNotification({
          message: 'Erro ao inserir produto.',
          type: 'error',
          description: err.message,
        });
      });
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string,
    isNumeric?: boolean,
  ) => {
    setInsertProduct({
      ...insertProduct,
      [value]: isNumeric ? Number(event.target.value) : event.target.value,
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
      <InsertProductScreenContainer>
        <LimitedContainer width={400} style={OutsideFormDivClass}>
          <Input
            value={insertProduct.name}
            onChange={(event) => handleInputChange(event, 'name')}
            margin="0px 0px 16px 0px"
            label="Nome"
          />
          <Input
            value={insertProduct.image}
            onChange={(event) => handleInputChange(event, 'image')}
            margin="0px 0px 16px 0px"
            label="URL da imagem"
          />
          <InputMoney
            value={insertProduct.price}
            onChange={(event) => handleInputChange(event, 'price', true)}
            margin="0px 0px 16px 0px"
            label="Preço"
          />
          <Select
            label="Categoria"
            margin="0px 0px 16px 0px"
            onChange={handleSelectChange}
            options={categories.map((category) => ({ label: category.name, value: category.id }))}
          />
          <DisplayFlexJCSpaceAround>
            <LimitedContainer width={150}>
              <Button onClick={handleOnClick} margin="16px 0px 0px 0px" type="primary">
                Inserir produto
              </Button>
            </LimitedContainer>
            <LimitedContainer width={150}>
              <Button
                danger
                onClick={() => navigate(ProductRoutesEnum.PRODUCT)}
                margin="16px 0px 0px 0px"
              >
                Cancelar
              </Button>
            </LimitedContainer>
          </DisplayFlexJCSpaceAround>
        </LimitedContainer>
      </InsertProductScreenContainer>
    </Screen>
  );
};

export default InsertProductScreen;
