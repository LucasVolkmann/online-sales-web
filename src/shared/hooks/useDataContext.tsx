import { createContext, useContext, useState } from 'react';

import { ProductType } from '../types/ProductType';

interface DataContextTypes {
  products?: ProductType[];
}

interface DataContextProps {
  data: DataContextTypes;
  setData: (data: DataContextTypes) => void;
}

const DataContext = createContext({} as DataContextProps);

interface DataProviderProps {
  children: React.ReactNode;
}

export const DataContextProvider = ({ children }: DataProviderProps) => {
  const [data, setData] = useState<DataContextTypes>({});

  return <DataContext.Provider value={{ data, setData }}>{children}</DataContext.Provider>;
};

export const useDataContext = () => {
  const { data, setData } = useContext(DataContext);

  const setProducts = (products: ProductType[]) => {
    setData({
      ...data,
      products,
    });
  };

  return {
    setProducts,
    products: data.products || [],
  };
};
