import { ReactNode } from 'react'
import * as TooltipRadix from '@radix-ui/react-tooltip';
import { TooltipArrow, TooltipContent } from './styles';

export interface TooltipProps  {
  children?: ReactNode
  tip?: string
}

export const Tooltip = ({children, tip}: TooltipProps) => {
  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root>
        <TooltipRadix.Trigger asChild>
          {children}
        </TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <TooltipContent sideOffset={5}>
            {tip}
            <TooltipArrow className="TooltipArrow" />
          </TooltipContent>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  );
};

Tooltip.displayName = 'Tooltip'