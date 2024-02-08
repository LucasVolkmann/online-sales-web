import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_CATEGORY } from '../../../shared/constants/Urls';
import { MethodsEnum } from '../../../shared/enumerations/methods.enum';
import { useDataContext } from '../../../shared/hooks/useDataContext';
import { useRequests } from '../../../shared/hooks/useRequests';
import { CategoryType } from '../../../shared/types/CategoryType';
import { CategoryEnum } from '../routes';

export const useCategory = () => {
  const [displayCategories, setDisplayCategories] = useState<CategoryType[]>([]);
  const { categories, setCategories } = useDataContext();
  const { request } = useRequests();
  const navigate = useNavigate();

  useEffect(() => {
    if (!categories || categories.length === 0) {
      request(URL_CATEGORY, MethodsEnum.GET, setCategories);
    }
  }, []);

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
