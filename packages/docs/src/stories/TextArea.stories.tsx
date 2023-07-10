import type { StoryObj, Meta } from '@storybook/react'
import { TextArea, TextAreaProps, Box, Text } from '@risingus-ignite-ui/react'

export default {
  title: 'Form/Text Area',
  tags: ['autodocs'],
  component: TextArea,
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
      >
        <Text size="sm">Observations</Text>
        {Story()}
      </Box>
    ),
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observations..',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
