import type { StoryObj, Meta } from '@storybook/react'
import { Box, CheckboxProps, Tooltip, Button, TooltipProps } from '@risingus-ignite-ui/react'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{
          display: 'flex',
          flexDirection: 'row',
          gap: '$2',
          alignItems: 'center',
        }}
      >
        {Story()}
      </Box>
    ),
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    children: (
      <Button variant='primary'>
        Hover to Show
      </Button>
    ),
    tip: 'This is a tip'
  },
}

