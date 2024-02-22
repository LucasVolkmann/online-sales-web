import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_CATEGORY, URL_CATEGORY_ID } from '../../../shared/constants/Urls';
import { MethodsEnum } from '../../../shared/enumerations/methods.enum';
import { connectionAPI_PUT } from '../../../shared/functions/connection/connectionAPI';
import { useRequests } from '../../../shared/hooks/useRequests';
import { CategoryType } from '../../../shared/types/CategoryType';
import { useCategoryReducer } from '../../../store/reducers/categoryReducer/useCategoryReducer';
import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';
import { CategoryEnum } from '../routes';

export const useCategory = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { request } = useRequests();
  const { setNotification } = useGlobalReducer();

  const [displayCategories, setDisplayCategories] = useState<CategoryType[]>([]);
  const { categories, setCategories } = useCategoryReducer();

  const [updateButtonDisable, setUpdateButtonDisable] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryToUpdate, setCategoryToUpdate] = useState<CategoryType>({
    name: '',
    id: 0,
    amountProducts: 0,
  });
  useEffect(() => {
    setLoading(true);
    request<CategoryType[]>(URL_CATEGORY, MethodsEnum.GET, setCategories).then(() =>
      setLoading(false),
    );
  }, []);

  useEffect(() => {
    setDisplayCategories([...categories]);
  }, [categories]);

  const handleOnSearch = (value: string) => {
    if (!value) {
      setDisplayCategories([...categories]);
    }
    setDisplayCategories(
      categories.filter((category) =>
        category.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()),
      ),
    );
  };

  const handleOnClickInsert = () => {
    navigate(CategoryEnum.CATEGORY_INSERT);
  };

  const handleOnClickUpdate = async () => {
    setUpdateLoading(true);
    await connectionAPI_PUT(URL_CATEGORY_ID.replace('{categoryId}', `${categoryToUpdate.id}`), {
      name: categoryToUpdate.name,
    }).then(() => {
      setNotification({
        message: `Categoria alterada com sucesso.`,
        type: 'success',
      });
      updateCategoriesArray(categoryToUpdate);
      setCategoryToUpdate({
        id: 0,
        name: '',
        amountProducts: 0,
      });
      setIsModalOpen(false);
    });
    setUpdateLoading(false);
  };

  const updateCategoriesArray = (category: CategoryType) => {
    const newCategories = categories.map((cat) => {
      if (cat.id === category.id) {
        return category;
      } else {
        return cat;
      }
    });
    setCategories(newCategories);
  };

  const handleOnChangeModalInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      setUpdateButtonDisable(true);
    } else {
      setUpdateButtonDisable(false);
    }
    setCategoryToUpdate({
      ...categoryToUpdate,
      name: event.target.value,
    });
  };

  return {
    categories,
    categoryToUpdate,
    displayCategories,
    handleOnChangeModalInput,
    handleOnClickInsert,
    handleOnClickUpdate,
    handleOnSearch,
    isModalOpen,
    loading,
    setCategoryToUpdate,
    setDisplayCategories,
    setIsModalOpen,
    updateButtonDisable,
    updateLoading,
  };
};
