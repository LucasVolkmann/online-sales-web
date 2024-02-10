import { useDispatch } from 'react-redux';

import { CategoryType } from '../../../shared/types/CategoryType';
import { useAppSelector } from '../../hooks';
import { setCategoriesAction } from '.';

export const useCategoryReducer = () => {
  const dispatch = useDispatch();
  const { categories } = useAppSelector((store) => store.categoryReducer);

  const setCategories = (newCategories: CategoryType[]) => {
    dispatch(setCategoriesAction(newCategories));
  };

  return {
    categories,
    setCategories,
  };
};
