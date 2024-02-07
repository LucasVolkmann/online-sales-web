import styled from 'styled-components';

interface LimitedContainerProps {
  width: string;
}

export const LimitedContainer = styled.div<LimitedContainerProps>`
  width: ${(props) => props.width};
`;
