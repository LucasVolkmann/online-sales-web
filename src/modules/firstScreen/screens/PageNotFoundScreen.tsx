import { Result } from 'antd';
import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import { FirstScreenEnum } from '../routes';
import { OutsideContainer } from '../styles/pageNotFoundScreen.styles';

const PageNotFoundScreen = () => {
  const navigate = useNavigate();

  const handleRedirectButton = () => {
    navigate(FirstScreenEnum.FIRST_PAGE);
  };

  return (
    <>
      <OutsideContainer>
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={
            <Button type="primary" onClick={handleRedirectButton}>
              Back Home
            </Button>
          }
        />
      </OutsideContainer>
    </>
  );
};

export default PageNotFoundScreen;
