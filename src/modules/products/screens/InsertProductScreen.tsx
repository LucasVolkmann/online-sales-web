import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import Input from '../../../shared/components/inputs/input/Input';
import InputMoney from '../../../shared/components/inputs/inputMoney/InputMoney';
import Select from '../../../shared/components/inputs/select/Select';
import Screen from '../../../shared/components/screens/Screen';
import {
  DisplayFlexJCSpaceAround,
  DisplayFlexJustifyCenter,
} from '../../../shared/components/styles/display.style';
import { OutsideFormDivClass } from '../../../shared/components/styles/insertProducts.style';
import { LimitedContainer } from '../../../shared/components/styles/limited.style';
import { useInsertProduct } from '../../../shared/hooks/useInsertProduct';
import { useCategory } from '../../categories/hooks/useCategory';
import { InsertProductScreenTestIdEnum } from '../enum/InsertProductScreenTestIdEnum';
import { ProductRoutesEnum } from '../routes';

const InsertProductScreen = () => {
  const { categories } = useCategory();
  const { handleOnClick, handleInputChange, handleSelectChange, insertProduct, disabled, loading } =
    useInsertProduct();
  const navigate = useNavigate();

  return (
    <Screen
      menuCurrentPage="product"
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
      <DisplayFlexJustifyCenter margin="64px">
        <LimitedContainer
          data-testid={InsertProductScreenTestIdEnum.OUTSIDE_CONTAINER}
          width={'400px'}
          style={OutsideFormDivClass}
        >
          <Input
            data-testid={InsertProductScreenTestIdEnum.NAME_INPUT}
            value={insertProduct.name}
            onChange={(event) => handleInputChange(event, 'name')}
            margin="0px 0px 16px 0px"
            label="Nome"
          />
          <Input
            data-testid={InsertProductScreenTestIdEnum.IMAGE_INPUT}
            value={insertProduct.image}
            onChange={(event) => handleInputChange(event, 'image')}
            margin="0px 0px 16px 0px"
            label="URL da imagem"
          />
          <InputMoney
            data-testid={InsertProductScreenTestIdEnum.PRICE_INPUT}
            value={insertProduct.price}
            onChange={(event) => handleInputChange(event, 'price', true)}
            margin="0px 0px 16px 0px"
            label="Preço"
          />
          <Select
            data-testid={InsertProductScreenTestIdEnum.CATEGORY_SELECT}
            label="Categoria"
            margin="0px 0px 16px 0px"
            onChange={handleSelectChange}
            options={categories.map((category) => ({ label: category.name, value: category.id }))}
          />
          <DisplayFlexJCSpaceAround>
            <LimitedContainer width={'150px'}>
              <Button
                data-testid={InsertProductScreenTestIdEnum.INSERT_BUTTON}
                disabled={disabled}
                loading={loading}
                onClick={handleOnClick}
                margin="16px 0px 0px 0px"
                type="primary"
              >
                Inserir produto
              </Button>
            </LimitedContainer>
            <LimitedContainer width={'150px'}>
              <Button
                data-testid={InsertProductScreenTestIdEnum.CANCEL_BUTTON}
                danger
                onClick={() => navigate(ProductRoutesEnum.PRODUCT)}
                margin="16px 0px 0px 0px"
              >
                Cancelar
              </Button>
            </LimitedContainer>
          </DisplayFlexJCSpaceAround>
        </LimitedContainer>
      </DisplayFlexJustifyCenter>
    </Screen>
  );
};

export default InsertProductScreen;
