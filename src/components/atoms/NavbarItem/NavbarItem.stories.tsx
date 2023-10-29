import type { Meta, StoryObj } from '@storybook/react';
import { NavbarItem } from '.';

const meta = {
  title: 'Atoms/NavbarItem',
  component: NavbarItem,
  argTypes: {
    children: ['default']
  }
} satisfies Meta<typeof NavbarItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'default'
  }
};
