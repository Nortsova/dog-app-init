import type { Meta, StoryObj } from '@storybook/react';
import { NavbarItem } from '.';

const meta = {
  title: 'Atoms/NavbarItem',
  component: NavbarItem,
  argTypes: {
    children: ['main']
  }
} satisfies Meta<typeof NavbarItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Item: Story = {
  args: {
    children: 'main'
  }
};
