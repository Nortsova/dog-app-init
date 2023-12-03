import type { Meta, StoryObj } from '@storybook/react';
import { GalleryBreedId } from '.';

const meta = {
  title: 'Molecules/GalleryBreedId',
  component: GalleryBreedId
} satisfies Meta<typeof GalleryBreedId>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    breedId: '1'
  }
};
