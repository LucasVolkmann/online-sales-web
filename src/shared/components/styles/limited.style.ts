import styled from 'styled-components';

interface LimitedContainerProps {
  width: string;
  margin?: string;
}

export const LimitedContainer = styled.div<LimitedContainerProps>`
  width: ${(props) => props.width};
  ${(props) => (props.margin ? `margin: ${props.margin}` : '')};
`;
