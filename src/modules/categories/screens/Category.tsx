import { Modal, Popconfirm, TableColumnsType } from 'antd';
import { useMemo } from 'react';

import Button from '../../../shared/components/buttons/button/Button';
import Input from '../../../shared/components/inputs/input/Input';
import Screen from '../../../shared/components/screens/Screen';
import {
  DisplayFlexJCSpaceAround,
  DisplayFlexJCSpaceBetween,
} from '../../../shared/components/styles/display.style';
import { LimitedContainer } from '../../../shared/components/styles/limited.style';
import Table from '../../../shared/components/tables/Table';
import { CategoryType } from '../../../shared/types/CategoryType';
import FilterInput from '../../products/components/FilterInput';
import { useCategory } from '../hooks/useCategory';

const Category = () => {
  const {
    categoryToUpdate,
    displayCategories,
    handleOnChangeModalInput,
    handleOnClickInsert,
    handleOnClickUpdate,
    handleOnSearch,
    isModalOpen,
    setCategoryToUpdate,
    setIsModalOpen,
    updateButtonDisable,
    updateLoading,
  } = useCategory();

  const handleOk = (categoryId: number) => {
    alert(`Category: ${categoryId}`);
  };

  const showModal = (category: CategoryType) => {
    setCategoryToUpdate(category);
    setIsModalOpen(true);
  };

  const columns: TableColumnsType<CategoryType> = useMemo(() => {
    return [
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Nome',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Quantidade de Produtos',
        dataIndex: 'amountProducts',
        key: 'amountProducts',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Ações',
        dataIndex: '',
        key: 'x',
        render: (_, category) => (
          <>
            <DisplayFlexJCSpaceAround>
              <a
                style={{ textDecoration: 'underline', color: 'orange', marginRight: '10px' }}
                onClick={() => showModal(category)}
              >
                Editar
              </a>
              <Popconfirm
                placement="left"
                title="Tem certeza?"
                okText="SIM"
                cancelText="NÃO"
                onConfirm={() => handleOk(category.id)}
              >
                <a style={{ textDecoration: 'underline', color: 'red' }}>Deletar</a>
              </Popconfirm>
            </DisplayFlexJCSpaceAround>
          </>
        ),
      },
    ];
  }, []);

  return (
    <Screen listBreadcrumb={[{ name: 'HOME' }, { name: 'CATEGORIAS' }]} menuCurrentPage="category">
      <Modal
        title="Insira o novo nome."
        open={isModalOpen}
        onOk={() => handleOnClickUpdate()}
        okButtonProps={{ loading: updateLoading, disabled: updateButtonDisable }}
        onCancel={() => setIsModalOpen(false)}
        okText="Alterar"
        cancelText="Cancelar"
      >
        <Input value={categoryToUpdate.name} onChange={handleOnChangeModalInput} />
      </Modal>
      <DisplayFlexJCSpaceBetween margin="0px 0px 24px">
        <LimitedContainer width="300px">
          <FilterInput placeholder="Buscar Categoria" onSearch={handleOnSearch} />
        </LimitedContainer>

        <LimitedContainer width="250px">
          <Button type="primary" onClick={handleOnClickInsert}>
            Adicionar uma nova categoria
          </Button>
        </LimitedContainer>
      </DisplayFlexJCSpaceBetween>

      <Table
        columns={columns}
        dataSource={displayCategories.map((p) => {
          return { ...p, key: p.id };
        })}
      />
    </Screen>
  );
};

export default Category;
