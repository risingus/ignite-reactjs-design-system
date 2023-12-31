import type { StoryObj, Meta } from '@storybook/react'
import { TextInputProps, TextInput, Box, Text } from '@risingus-ignite-ui/react'

export default {
  title: 'Form/Text Input',
  tags: ['autodocs'],
  component: TextInput,
  decorators: [
    (Story) => (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
      >
        <Text size="sm">E-mail address</Text>
        {Story()}
      </Box>
    ),
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your e-mail',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
    placeholder: 'your-username'
  },
}
