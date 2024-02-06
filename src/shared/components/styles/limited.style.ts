import styled from 'styled-components';

interface LimitedContainerProps {
  width: number;
}

export const LimitedContainer = styled.div<LimitedContainerProps>`
  width: ${(props) => props.width}px;
`;
