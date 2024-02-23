import { Breadcrumb as BreadcrumbAntd } from 'antd';
import { useNavigate } from 'react-router-dom';

import { BreadcrumbTestIdEnum } from './test_enum/BreadcrumbTestIdEnum.enum';

export interface ListBreadcrumb {
  name: string;
  navigateTo?: string;
}

interface BreadcrumbProps {
  listBreadcrumb: ListBreadcrumb[];
}

const Breadcrumb = ({ listBreadcrumb }: BreadcrumbProps) => {
  const navigate = useNavigate();

  const handleGoToClick = (navigateTo: string) => {
    navigate(navigateTo);
  };

  return (
    <BreadcrumbAntd
      data-testid={BreadcrumbTestIdEnum.BREADCRUMB_ID}
      items={listBreadcrumb.map((item, index) => {
        if (item.navigateTo) {
          return {
            title: (
              <a key={`breadcrumb ${index}`} onClick={() => handleGoToClick(item.navigateTo || '')}>
                {item.name}
              </a>
            ),
          };
        } else {
          return {
            title: item.name,
          };
        }
      })}
    />
  );
};

export default Breadcrumb;
