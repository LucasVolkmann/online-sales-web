import styled from 'styled-components';

interface DisplayFlexProps {
  margin?: string;
}

export const DisplayFlex = styled.div<DisplayFlexProps>`
  display: flex;
  ${(props) => (props.margin ? `margin: ${props.margin}` : '')};
`;

export const DisplayFlexRight = styled(DisplayFlex)`
  justify-content: right;
`;

export const DisplayFlexJustifyCenter = styled(DisplayFlex)`
  justify-content: center;
`;

export const DisplayFlexJCSpaceBetween = styled(DisplayFlex)`
  justify-content: space-between;
`;

export const DisplayFlexJCSpaceAround = styled(DisplayFlex)`
  justify-content: space-around;
`;
