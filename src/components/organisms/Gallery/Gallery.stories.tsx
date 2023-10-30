import type { Meta, StoryObj } from '@storybook/react';
import { Gallery } from '.';

const meta = {
  title: 'Organisms/Gallery',
  component: Gallery
} satisfies Meta<typeof Gallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    info: {
      title: 'Title'
    }
  }
};
