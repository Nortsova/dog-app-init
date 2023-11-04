import { FC, useState } from 'react';
import { Box, Button, Stack, styled } from '@mui/material';
import { useAddFavoritesMutation } from '../services/favorites';
import { TestComponent } from './TestComponent';
import { useGetImagesWithFavorites } from '../utilities';

const StyledStack = styled(Stack)(() => ({
  '& .MuiBox-root': {
    width: 300
  },
  '& .MuiBox-root:nth-child(2n)': {
    width: 200
  }
}));

type DogCardProps = {
  id: string;
  isFavorite: boolean;
  url: string;
  addFavorite: any;
  content?: {
    title: string;
    description: string;
  };
  handleMore?: () => void;
};

const DogCard: FC<DogCardProps> = ({
  id,
  isFavorite,
  url,
  addFavorite,
  content,
  handleMore
}) => {
  const [isHovered, setHovered] = useState(false);
  const handleBtnAddClick = () => {
    addFavorite({ image_id: id, sub_id: 'nastya' });
  };
  return (
    <Box
      key={id}
      sx={{
        maxWidth: '300px',
        border: '2px solid',
        borderColor: isFavorite ? 'warning.main' : 'transparent'
      }}
    >
      <Button
        data-testid={`like-btn-${id}`}
        onClick={handleBtnAddClick}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
      >
        {isHovered ? 'hovered' : 'default'}
      </Button>
      <img alt={id} src={url} width="100%" />
      {handleMore && <Button onClick={handleMore}>More</Button>}
      {content && (
        <>
          <h3>{content.title}</h3>
          <p>{content.description}</p>
        </>
      )}
    </Box>
  );
};

export const MainPage = () => {
  const [page, setPage] = useState(0);
  const { data: favoritedImages, isLoading } = useGetImagesWithFavorites({
    page
  });

  const [addFavorite] = useAddFavoritesMutation();

  return (
    <>
      <TestComponent />

      {isLoading && <div>Loading...</div>}
      {page && `PAGE: ${page}`}
      <button
        data-testid="btn-next"
        type="button"
        onClick={() => setPage(prev => prev + 1)}
      >
        Next page
      </button>
      <button
        data-testid="btn-prev"
        type="button"
        onClick={() => setPage(prev => prev - 1)}
      >
        prev page
      </button>
      <StyledStack direction="row" flexWrap="wrap">
        {(favoritedImages || []).map(item => (
          <DogCard
            key={item.id}
            id={item.id}
            url={item.url}
            isFavorite={item.isFavorite}
            addFavorite={addFavorite}
            handleMore={() => {}}
            content={{
              title: item?.breeds?.[0]?.name ?? '',
              description: 'test descr'
            }}
          />
        ))}
      </StyledStack>
    </>
  );
};
