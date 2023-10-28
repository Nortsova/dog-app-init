import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '.';

const meta = {
  title: 'Atoms/CardComponent',
  component: Card,
  argTypes: {
    variant: {
      options: ['primary', 'secondary']
    }
  }
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    borderRadius: 20
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    borderRadius: 10
  }
};
