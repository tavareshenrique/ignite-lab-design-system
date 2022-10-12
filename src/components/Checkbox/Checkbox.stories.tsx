import { Meta, StoryObj } from '@storybook/react';
import { Text } from '../Text';
import { Checkbox, CheckboxProps } from './';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => (
      <div className='flex items-center gap-2' >
        {Story()}
        <Text size='sm' >Aceito os termos de uso.</Text>
      </div>
  )
  ]
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {}
