import type { Meta, StoryObj } from '@storybook/react';
import { PlusButton } from '.';

const meta = {
  title: 'Atoms/PlusButton',
  component: PlusButton,
  argTypes: {
    state: {
      options: ['hover', 'active', 'default']
    }
  }
} satisfies Meta<typeof PlusButton>;

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
