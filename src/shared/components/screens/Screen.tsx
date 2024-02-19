import { Divider } from 'antd';

import Breadcrumb, { ListBreadcrumb } from '../breadcrumb/Breadcrumb';
import Header from '../header/Header';
import Menu from '../menu/Menu';
import { ScreenContainer } from './screen.style';

interface ScreenProps {
  children: React.ReactNode;
  listBreadcrumb: ListBreadcrumb[];
  menuCurrentPage?: string;
}

const Screen = ({ children, listBreadcrumb, menuCurrentPage }: ScreenProps) => {
  return (
    <>
      <Header />
      <ScreenContainer>
        <Menu currentPage={menuCurrentPage} />
        <Breadcrumb listBreadcrumb={listBreadcrumb} />
        <Divider />
        {children}
      </ScreenContainer>
    </>
  );
};

export default Screen;
