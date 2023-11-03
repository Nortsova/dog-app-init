import { useGetFavoritesQuery } from '../services/favorites';

export const FavoritesPage = () => {
  const { data: breeds, isLoading } = useGetFavoritesQuery();
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {(breeds || []).map(item => (
        <div key={item.id}>
          <img src={item.image.url} alt={item.image_id} width="300px" />
        </div>
      ))}
    </>
  );
};
