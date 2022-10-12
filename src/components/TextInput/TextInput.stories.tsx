import { Meta, StoryObj } from '@storybook/react';
import { Envelope } from 'phosphor-react';
import { TextInput, ITextInputInputProps } from './';

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Type your e-mail address." />
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    }
  }
} as Meta<ITextInputInputProps>;

export const Default: StoryObj<ITextInputInputProps> = {}
