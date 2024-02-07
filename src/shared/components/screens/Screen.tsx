import { Divider } from 'antd';

import Breadcrumb, { ListBreadcrumb } from '../breadcromb/Breadcrumb';
import Menu from '../menu/Menu';
import { MainContent, ScreenContainer } from './screen.style';

interface ScreenProps {
  children: React.ReactNode;
  listBreadcrumb: ListBreadcrumb[];
}

const Screen = ({ children, listBreadcrumb }: ScreenProps) => {
  return (
    <ScreenContainer>
      <Menu />
      <MainContent>
        <Breadcrumb listBreadcrumb={listBreadcrumb} />
        <Divider />
        {children}
      </MainContent>
    </ScreenContainer>
  );
};

export default Screen;
