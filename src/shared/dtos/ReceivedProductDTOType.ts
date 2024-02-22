import { CategoryType } from '../types/CategoryType';

export interface ReceivedProductDTOType {
  id: number;
  name: string;
  price: number;
  image: string;
  weight: number;
  length: number;
  height: number;
  width: number;
  diameter: number;
  category?: CategoryType;
}
