import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import Input from '../../../shared/components/inputs/input/Input';
import InputNumber from '../../../shared/components/inputs/inputMoney/InputNumber';
import Select from '../../../shared/components/inputs/select/Select';
import Screen from '../../../shared/components/screens/Screen';
import {
  DisplayFlexJCSpaceAround,
  DisplayFlexJCSpaceBetween,
  DisplayFlexJustifyCenter,
} from '../../../shared/components/styles/display.style';
import { OutsideFormDivClass } from '../../../shared/components/styles/insertProducts.style';
import { LimitedContainer } from '../../../shared/components/styles/limited.style';
import { useCategory } from '../../categories/hooks/useCategory';
import { InsertProductScreenTestIdEnum } from '../enum/InsertProductScreenTestIdEnum';
import { useInsertProduct } from '../hooks/useInsertProduct';
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
          <InputNumber
            data-testid={InsertProductScreenTestIdEnum.PRICE_INPUT}
            value={insertProduct.price}
            onChange={(event) => handleInputChange(event, 'price', true)}
            addonBefore="R$"
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
            <LimitedContainer width="45%">
              <InputNumber
                data-testid={InsertProductScreenTestIdEnum.PRICE_INPUT}
                value={insertProduct.weight}
                onChange={(event) => handleInputChange(event, 'weight', true)}
                margin="0px 0px 16px 0px"
                label="Peso"
                addonAfter="Kg"
              />
            </LimitedContainer>
            <LimitedContainer width="45%">
              <Input
                data-testid={InsertProductScreenTestIdEnum.PRICE_INPUT}
                value={insertProduct.length}
                onChange={(event) => handleInputChange(event, 'length', true)}
                margin="0px 0px 16px 0px"
                label="Comprimento"
                addonAfter="cm"
              />
            </LimitedContainer>
          </DisplayFlexJCSpaceAround>
          <DisplayFlexJCSpaceAround>
            <LimitedContainer width="45%">
              <Input
                data-testid={InsertProductScreenTestIdEnum.PRICE_INPUT}
                value={insertProduct.height}
                onChange={(event) => handleInputChange(event, 'height', true)}
                margin="0px 0px 16px 0px"
                label="Altura"
                addonAfter="cm"
              />
            </LimitedContainer>
            <LimitedContainer width="45%">
              <Input
                data-testid={InsertProductScreenTestIdEnum.PRICE_INPUT}
                value={insertProduct.width}
                onChange={(event) => handleInputChange(event, 'width', true)}
                margin="0px 0px 16px 0px"
                label="Largura"
                addonAfter="cm"
              />
            </LimitedContainer>
          </DisplayFlexJCSpaceAround>
          <DisplayFlexJustifyCenter>
            <LimitedContainer width="45%">
              <Input
                data-testid={InsertProductScreenTestIdEnum.PRICE_INPUT}
                value={insertProduct.diameter}
                onChange={(event) => handleInputChange(event, 'diameter', true)}
                margin="0px 0px 16px 0px"
                label="Diâmetro"
                addonAfter="cm"
              />
            </LimitedContainer>
          </DisplayFlexJustifyCenter>

          <DisplayFlexJCSpaceBetween>
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
          </DisplayFlexJCSpaceBetween>
        </LimitedContainer>
      </DisplayFlexJustifyCenter>
    </Screen>
  );
};

export default InsertProductScreen;
