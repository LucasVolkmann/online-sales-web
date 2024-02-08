import Screen from '../../../shared/components/screens/Screen';
import { useCategory } from '../hooks/useCategory';

const listBreadcrumb = [{ name: 'HOME' }, { name: 'CATEGORIES' }];

const Category = () => {
  const { categories } = useCategory();

  return (
    <Screen listBreadcrumb={listBreadcrumb}>
      <h1>Category Page</h1>
      <br />
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </Screen>
  );
};

export default Category;
