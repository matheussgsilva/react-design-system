import { Meta, StoryObj } from '@storybook/react';
import { TextInput, TextInputRootProps } from "./TextInput";

export default {
  title: 'Component/TextInput',
  component: TextInput.Root,
  args: {
    children: (
      <TextInput.Input placeholder="Type your e-mail address" />
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    },
  }
} as unknown as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

