import { Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

export const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputLabel = styled(Text)`
  font-style: normal;
  font-weight: 400;
  font-size: 100%;
  line-height: 21px;

  color: rgba(100, 100, 100, 1);

  margin-left: 12px;
`;
