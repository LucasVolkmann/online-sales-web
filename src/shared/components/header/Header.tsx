import { Modal } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGlobalReducer } from '../../../store/reducers/globalReducer/useGlobalReducer';
import { logout } from '../../functions/connection/auth';
import { HeaderTestIdEnum } from './enum/headerTestIdEnum';
import { Greeting, HeaderContainer, LogoutButton, Username } from './header.style';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useGlobalReducer();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    logout(navigate);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        data-testid={HeaderTestIdEnum.MODAL_TEST_ID}
        title="Você está saindo!"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Sim"
        cancelText="Cancelar"
      >
        <p>Tem certeza disso?</p>
      </Modal>
      <HeaderContainer data-testid={HeaderTestIdEnum.CONTAINER_TEST_ID}>
        <Greeting>
          Olá, <Username>{user?.name}</Username>!
        </Greeting>
        <LogoutButton data-testid={HeaderTestIdEnum.LOGOUT_BUTTON_TEST_ID} onClick={showModal} />
      </HeaderContainer>
    </>
  );
};

export default Header;
