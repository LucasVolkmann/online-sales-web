import Breadcrumb, { ListBreadcrumb } from '../breadcromb/Breadcrumb';
import { ScreenContainer } from './screen.style';

interface ScreenProps {
  children: React.ReactNode;
  listBreadcrumb: ListBreadcrumb[];
}

const Screen = ({ children, listBreadcrumb }: ScreenProps) => {
  return (
    <ScreenContainer>
      <Breadcrumb listBreadcrumb={listBreadcrumb} />
      {children}
    </ScreenContainer>
  );
};

export default Screen;
