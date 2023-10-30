import { Box, Stack } from '@mui/material';
import { useState } from 'react';
import { GalleryScreen } from '../../molecules/GalleryScreen';
import { GalleryList } from '../../molecules/GalleryList';
import { GalleryItemProps } from '../../../types/gallery';

const galleryItems: GalleryItemProps[] = [
  {
    title: 'Image 1',
    url: 'https://loremflickr.com/640/361',
    id: '1'
  },
  {
    title: 'Image 2',
    url: 'https://loremflickr.com/640/362',
    id: '2'
  },
  {
    title: 'Image 3',
    url: 'https://loremflickr.com/640/363',
    id: '3'
  },
  {
    title: 'Image 4',
    url: 'https://loremflickr.com/640/364',
    id: '4'
  }
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItemProps>(
    galleryItems[0]
  );
  const handleClick = (newImage: GalleryItemProps) => () => {
    setSelectedImage(newImage);
  };
  return (
    <Stack direction="row">
      <Box
        sx={{
          maxWidth: '500px'
        }}
      >
        <GalleryScreen title={selectedImage.title} url={selectedImage.url} />
      </Box>
      <GalleryList items={galleryItems} handleClick={handleClick} />
    </Stack>
  );
};
