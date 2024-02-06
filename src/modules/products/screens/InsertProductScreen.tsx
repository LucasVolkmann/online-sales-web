import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import Input from '../../../shared/components/inputs/input/Input';
import InputMoney from '../../../shared/components/inputs/inputMoney/InputMoney';
import Select from '../../../shared/components/inputs/select/Select';
import Screen from '../../../shared/components/screens/Screen';
import { DisplayFlexJCSpaceAround } from '../../../shared/components/styles/display.style';
import { LimitedContainer } from '../../../shared/components/styles/limited.style';
import { URL_CATEGORY } from '../../../shared/constants/Urls';
import { MethodsEnum } from '../../../shared/enumerations/methods.enum';
import { useDataContext } from '../../../shared/hooks/useDataContext';
import { useInsertProduct } from '../../../shared/hooks/useInsertProduct';
import { useRequests } from '../../../shared/hooks/useRequests';
import { ProductRoutesEnum } from '../routes';
import { InsertProductScreenContainer, OutsideFormDivClass } from '../styles/insertProducts.style';

const InsertProductScreen = () => {
  const { request } = useRequests();
  const { categories, setCategories } = useDataContext();
  const { handleOnClick, handleInputChange, handleSelectChange, insertProduct, disabled, loading } =
    useInsertProduct();
  const navigate = useNavigate();

  useEffect(() => {
    request(URL_CATEGORY, MethodsEnum.GET, setCategories);
  }, []);

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
              <Button
                disabled={disabled}
                loading={loading}
                onClick={handleOnClick}
                margin="16px 0px 0px 0px"
                type="primary"
              >
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
