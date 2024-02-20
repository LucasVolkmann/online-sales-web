import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_CATEGORY } from '../../../shared/constants/Urls';
import { MethodsEnum } from '../../../shared/enumerations/methods.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { CategoryType } from '../../../shared/types/CategoryType';
import { useCategoryReducer } from '../../../store/reducers/categoryReducer/useCategoryReducer';
import { CategoryEnum } from '../routes';

export const useCategory = () => {
  const [displayCategories, setDisplayCategories] = useState<CategoryType[]>([]);
  const { categories, setCategories } = useCategoryReducer();
  const { request } = useRequests();
  const navigate = useNavigate();

  useEffect(() => {
    if (!categories || categories.length === 0) {
      request(URL_CATEGORY, MethodsEnum.GET, setCategories);
    }
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

  return {
    categories,
    handleOnSearch,
    handleOnClickInsert,
    displayCategories,
    setDisplayCategories,
  };
};
