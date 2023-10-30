import { Box } from '@mui/material';
import { FC } from 'react';
import { GalleryItemProps } from '../../../types/gallery';

export const GalleryScreen: FC<Omit<GalleryItemProps, 'id'>> = ({
  url,
  title
}) => (
  <Box
    sx={{
      borderRadius: '30px',
      boxShadow: '4px 4px 0 #000',
      overflow: 'hidden',
      display: 'inline-flex'
    }}
  >
    <img
      style={{
        verticalAlign: 'middle',
        maxWidth: '100%'
      }}
      alt={title}
      src={url}
    />
  </Box>
);
