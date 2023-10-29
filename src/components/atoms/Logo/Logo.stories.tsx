import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from '.';

const meta = {
  title: 'Atoms/Logo',
  component: Logo,
  argTypes: {
    variant: {
      options: ['primary']
    }
  }
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary'
  }
};
