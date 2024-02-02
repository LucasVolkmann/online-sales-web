import { Breadcrumb as BreadcrumbAntd } from 'antd';
import { useNavigate } from 'react-router-dom';

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
    <BreadcrumbAntd>
      {listBreadcrumb.map((item, i) => {
        return (
          <BreadcrumbAntd.Item key={`breadcrumb ${i}`}>
            {item.navigateTo ? (
              <a
                onClick={() => {
                  handleGoToClick(item.navigateTo || '');
                }}
              >
                {item.name}
              </a>
            ) : (
              item.name
            )}
          </BreadcrumbAntd.Item>
        );
      })}
    </BreadcrumbAntd>
  );
};

export default Breadcrumb;
