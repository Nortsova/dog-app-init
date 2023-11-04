import type { Meta, StoryObj } from '@storybook/react';
import { CustomComponent } from '.';

const meta = {
  title: 'Atoms/CustomComponent',
  component: CustomComponent,
  argTypes: {
    status: {
      options: ['error', 'success', 'loading'],
      control: 'radio'
    }
  }
} satisfies Meta<typeof CustomComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ErrorCustomComponent: Story = {
  args: {
    status: 'error'
  }
};
export const SuccessCustomComponent: Story = {
  args: {
    status: 'success'
  }
};

export const LoadingCustomComponent: Story = {
  args: {
    status: 'loading'
  }
};

export const DefaultCustomComponent: Story = {
  args: {}
};
