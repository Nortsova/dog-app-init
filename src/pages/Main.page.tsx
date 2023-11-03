import { useState } from 'react';
import { Box, Button, Stack } from '@mui/material';
import { useAddFavoritesMutation } from '../services/favorites';
import { TestComponent } from './TestComponent';
import { useGetImagesWithFavorites } from '../utilities';

export const MainPage = () => {
  const [page, setPage] = useState(0);
  const { data: favoritedImages, isLoading } = useGetImagesWithFavorites({
    page
  });

  const [addFavorite] = useAddFavoritesMutation();

  const handleBtnAddClick = (id: string) => () => {
    addFavorite({ image_id: id, sub_id: 'nastya' });
  };

  return (
    <>
      <TestComponent />

      {isLoading && <div>Loading...</div>}
      {page && `PAGE: ${page}`}
      <button type="button" onClick={() => setPage(prev => prev + 1)}>
        Next page
      </button>
      <button type="button" onClick={() => setPage(prev => prev - 1)}>
        prev page
      </button>
      <Stack direction="row" flexWrap="wrap">
        {(favoritedImages || []).map(item => (
          <Box
            key={item.id}
            sx={{
              maxWidth: '300px',
              border: '2px solid',
              borderColor: item.isFavorite ? 'warning.main' : 'transparent'
            }}
          >
            <Button onClick={handleBtnAddClick(item.id)}>Like</Button>
            <img alt={item.id} src={item.url} width="100%" />
          </Box>
        ))}
      </Stack>
    </>
  );
};
