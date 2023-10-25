import type { Meta, StoryObj } from '@storybook/react';
import { HeartButton } from '.';

const meta = {
  title: 'Atoms/HeartButton',
  component: HeartButton,
  argTypes: {
    state: {
      options: ['hover', 'active', 'default']
    }
  }
} satisfies Meta<typeof HeartButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: 'default'
  }
};

export const Active: Story = {
  args: {
    state: 'active'
  }
};

export const Hover: Story = {
  args: {
    state: 'hover'
  }
};
