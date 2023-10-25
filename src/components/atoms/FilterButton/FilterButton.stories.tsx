import type { Meta, StoryObj } from '@storybook/react';
import { FilterButton } from '.';

const meta = {
  title: 'Atoms/FilterButton',
  component: FilterButton,
  argTypes: {
    state: {
      options: ['default', 'down', 'random']
    }
  }
} satisfies Meta<typeof FilterButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Up: Story = {
  args: {
    state: 'default'
  }
};

export const Down: Story = {
  args: {
    state: 'down'
  }
};

export const Random: Story = {
  args: {
    state: 'random'
  }
};
