import { Button } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['contained', 'outlined'],
      control: 'radio'
    },
    color: {
      options: ['primary', 'secondary', 'success'],
      control: 'radio'
    }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <Button variant="contained" color="primary">
      My Btn
    </Button>
  )
};

export const Secondary: Story = {
  args: {
    variant: 'outlined',
    children: 'Button'
  }
};
