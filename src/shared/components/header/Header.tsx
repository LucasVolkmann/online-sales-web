import { Modal } from 'antd';
import { useState } from 'react';

import { logout } from '../../functions/connection/auth';
import { HeaderContainer, LogoutButton } from './header.style';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    logout();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <HeaderContainer>
      <Modal
        title="Você está saindo!"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Sim"
        cancelText="Cancelar"
      >
        <p>Tem certeza disso?</p>
      </Modal>
      <LogoutButton onClick={showModal} />
    </HeaderContainer>
  );
};

export default Header;
