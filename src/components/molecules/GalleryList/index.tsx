import { FC } from 'react';
import { Box, Stack, styled } from '@mui/material';
import { GalleryItemProps } from '../../../types/gallery';

const StyledItem = styled(Box)(() => ({
  borderRadius: '8px',
  boxShadow: '2px 2px 0 #000',
  overflow: 'hidden',
  display: 'inline-flex',
  maxWidth: '150px'
}));

type GalleryListProps = {
  items: GalleryItemProps[];
  handleClick: (id: GalleryItemProps) => () => void;
};

export const GalleryList: FC<GalleryListProps> = ({ items, handleClick }) => (
  <Stack
    sx={{
      gap: 1,
      marginLeft: 3
    }}
  >
    {items.map(item => (
      <StyledItem key={item.title}>
        <button type="button" onClick={handleClick(item)}>
          <img
            style={{
              verticalAlign: 'middle',
              maxWidth: '100%'
            }}
            alt={item.title}
            src={item.url}
          />
        </button>
      </StyledItem>
    ))}
  </Stack>
);
