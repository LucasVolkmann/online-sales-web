import {
  HomeOutlined,
  LaptopOutlined,
  ProfileOutlined,
  SafetyCertificateOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu as MenuAntD } from 'antd';
import { useState } from 'react';

import { LogoNameContainer, MenuContainer, MenuLogo, MenuName } from './menu.style';

type MenuItem = Required<MenuProps>['items'][number];

const rootSubmenuKeys = ['home', 'products', 'category', 'order', 'user'];

const Menu = () => {
  const [openKeys, setOpenKeys] = useState(['']);

  const items: MenuItem[] = [
    {
      key: 'home',
      label: 'Principal',
      icon: <HomeOutlined />,
    },
    {
      key: 'products',
      label: 'Produtos',
      icon: <LaptopOutlined />,
      children: [
        {
          key: 'view',
          label: 'Visualizar',
          onClick: () => null,
        },
        {
          key: 'insert',
          label: 'Inserir',
          onClick: () => null,
        },
      ],
    },
    {
      key: 'category',
      label: 'Categorias',
      icon: <ProfileOutlined />,
      children: [
        {
          key: 'view',
          label: 'Visualizar',
          onClick: () => null,
        },
        {
          key: 'insert',
          label: 'Inserir',
          onClick: () => null,
        },
      ],
    },
    {
      key: 'order',
      label: 'Pedidos',
      icon: <SafetyCertificateOutlined />,
      children: [],
    },
    {
      key: 'user',
      label: 'Usuários',
      icon: <UserOutlined />,
      children: [],
    },
  ];

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <MenuContainer>
      <LogoNameContainer>
        <MenuLogo />
        <MenuName>On-Sales</MenuName>
      </LogoNameContainer>
      <MenuAntD
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{ width: 250, border: 'none' }}
        items={items}
      />
    </MenuContainer>
  );
};

export default Menu;
