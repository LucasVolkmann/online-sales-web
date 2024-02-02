import { Tooltip as TooltipAntd } from 'antd';
import React from 'react';

import { ExternalContainer, TooltipContainer } from './tooltip.style';

interface TooltipProps {
  children: React.ReactNode;
  tooltip?: React.ReactNode;
  title?: string;
}

const Tooltip = ({ children, tooltip, title }: TooltipProps) => {
  if (title) {
    return <TooltipAntd title={title}>{children}</TooltipAntd>;
  }

  return (
    <ExternalContainer>
      <TooltipContainer>{tooltip}</TooltipContainer>
      {children}
    </ExternalContainer>
  );
};

export default Tooltip;
