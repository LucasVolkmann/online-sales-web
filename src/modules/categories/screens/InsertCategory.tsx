import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import Input from '../../../shared/components/inputs/input/Input';
import Screen from '../../../shared/components/screens/Screen';
import {
  DisplayFlexJCSpaceAround,
  DisplayFlexJustifyCenter,
} from '../../../shared/components/styles/display.style';
import { OutsideFormDivClass } from '../../../shared/components/styles/insertProducts.style';
import { LimitedContainer } from '../../../shared/components/styles/limited.style';
import { useInsertCategory } from '../hooks/useInsertCategory';
import { CategoryEnum } from '../routes';

const InsertCategory = () => {
  const navigate = useNavigate();
  const { name, loading, disabled, handleOnChangeName, handleOnClick } = useInsertCategory();

  return (
    <Screen
      listBreadcrumb={[
        { name: 'HOME' },
        { name: 'CATEGORIAS', navigateTo: CategoryEnum.CATEGORY },
        { name: 'INSERIR CATEGORIA' },
      ]}
    >
      <DisplayFlexJustifyCenter margin="64px">
        <LimitedContainer width={'400px'} style={OutsideFormDivClass}>
          <Input
            value={name}
            onChange={handleOnChangeName}
            margin="0px 0px 16px 0px"
            label="Nome"
          />
          <DisplayFlexJCSpaceAround>
            <LimitedContainer width={'150px'}>
              <Button
                disabled={disabled}
                loading={loading}
                onClick={handleOnClick}
                margin="16px 0px 0px 0px"
                type="primary"
              >
                Inserir categoria
              </Button>
            </LimitedContainer>
            <LimitedContainer width={'150px'}>
              <Button
                danger
                onClick={() => navigate(CategoryEnum.CATEGORY)}
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

export default InsertCategory;
