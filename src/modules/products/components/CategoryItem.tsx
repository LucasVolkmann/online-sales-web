import { Tag } from 'antd';

import { CategoryType } from '../../../shared/types/CategoryType';

interface CategoryItemProps {
  category: CategoryType;
}

const colors: string[] = [
  'green',
  'purple',
  'gold',
  'lime',
  'magenta',
  'volcano',
  'cyan',
  'blue',
  'geekblue',
  'orange',
  'red',
];

const CategoryItem = ({ category }: CategoryItemProps) => {
  if (category) {
    return <Tag color={colors[category.id % colors.length]}>{category.name}</Tag>;
  }
  return null;
};

export default CategoryItem;
