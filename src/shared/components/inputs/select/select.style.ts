import { Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

export const BoxSelect = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SelectLabel = styled(Text)`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;

  color: rgba(100, 100, 100, 1);

  margin-left: 12px;
`;
