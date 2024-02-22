import { Spin } from 'antd';
import { useParams } from 'react-router-dom';

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
import { CategoryType } from '../../../shared/types/CategoryType';
import { useCategory } from '../../categories/hooks/useCategory';
import { useUpdateProduct } from '../hooks/useUpdateProduct';
import { ProductRoutesEnum } from '../routes';

const UpdateProductScreen = () => {
  const { productId } = useParams<{ productId: string }>();
  const { categories, loading: categoryLoading } = useCategory();
  const {
    handleOnClickUpdate,
    handleOnClickCancel,
    handleInputChange,
    handleSelectChange,
    updateProduct,
    disabled,
    loading,
    loadingGetProduct,
  } = useUpdateProduct(Number(productId));

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
          name: 'EDITAR PRODUTO',
        },
      ]}
    >
      <DisplayFlexJustifyCenter margin="64px">
        <LimitedContainer width={'400px'} style={OutsideFormDivClass}>
          {categoryLoading || loadingGetProduct ? (
            <Spin size="large" style={{ width: '100%' }} />
          ) : (
            <>
              <Input
                value={updateProduct.name}
                onChange={(event) => handleInputChange(event, 'name')}
                margin="0px 0px 16px 0px"
                label="Nome"
              />
              <Input
                value={updateProduct.image}
                onChange={(event) => handleInputChange(event, 'image')}
                margin="0px 0px 16px 0px"
                label="URL da imagem"
              />
              <InputNumber
                value={updateProduct.price}
                onChange={(event) => handleInputChange(event, 'price', true)}
                addonBefore="R$"
                margin="0px 0px 16px 0px"
                label="Preço"
              />
              <Select
                label="Categoria"
                margin="0px 0px 16px 0px"
                onChange={handleSelectChange}
                defaultValue={{
                  label: categories.find(
                    (category: CategoryType) => category.id == updateProduct.categoryId,
                  )?.name,
                  value: updateProduct.categoryId,
                }}
                options={categories.map((category: CategoryType) => ({
                  label: category.name,
                  value: category.id,
                }))}
              />
              <DisplayFlexJCSpaceAround>
                <LimitedContainer width="45%">
                  <InputNumber
                    value={updateProduct.weight}
                    onChange={(event) => handleInputChange(event, 'weight', true)}
                    margin="0px 0px 16px 0px"
                    label="Peso"
                    addonAfter="Kg"
                  />
                </LimitedContainer>
                <LimitedContainer width="45%">
                  <Input
                    value={updateProduct.length}
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
                    value={updateProduct.height}
                    onChange={(event) => handleInputChange(event, 'height', true)}
                    margin="0px 0px 16px 0px"
                    label="Altura"
                    addonAfter="cm"
                  />
                </LimitedContainer>
                <LimitedContainer width="45%">
                  <Input
                    value={updateProduct.width}
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
                    value={updateProduct.diameter}
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
                    disabled={disabled}
                    loading={loading}
                    onClick={handleOnClickUpdate}
                    margin="16px 0px 0px 0px"
                    type="primary"
                  >
                    Editar produto
                  </Button>
                </LimitedContainer>
                <LimitedContainer width={'150px'}>
                  <Button danger onClick={handleOnClickCancel} margin="16px 0px 0px 0px">
                    Cancelar
                  </Button>
                </LimitedContainer>
              </DisplayFlexJCSpaceBetween>
            </>
          )}
        </LimitedContainer>
      </DisplayFlexJustifyCenter>
    </Screen>
  );
};

export default UpdateProductScreen;
