import { LogoutOutlined } from '@ant-design/icons';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  max-width: calc(100% - 250px);
  height: 75px;
  margin-left: auto;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  background-color: white;

  border-bottom: 1px solid #d3d3d3;
`;

export const LogoutButton = styled(LogoutOutlined)`
  margin-right: ${(75 - 24) / 2}px;
  color: #777;
  font-size: 24px;

  &:hover {
    color: #ffc801;
    font-size: 28px;
    margin-right: ${(75 - 28) / 2}px;
  }
`;
