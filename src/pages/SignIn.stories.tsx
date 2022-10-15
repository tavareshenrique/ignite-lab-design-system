import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { rest } from 'msw';
import { expect } from '@storybook/jest';

import { SignIn } from './SignIn';

export default {
  title: 'Pages/SignIn',
  component: SignIn,
  args: {
    children: 'Create Account',
  },
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post('/sessions', (req, res, ctx) => {
          return res(ctx.status(200));
        }),
      ]
    }
  }
} as Meta;

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(canvas.getByPlaceholderText('Digite seu email'), 'ihenrits@gmail.com');
    userEvent.type(canvas.getByPlaceholderText('*********'), '123456789');

    userEvent.click(canvas.getByRole('button'));

    await waitFor(() => {
      return expect(canvas.getByText('Login Realizado!')).toBeInTheDocument();
    })
  }
}
