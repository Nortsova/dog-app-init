import { useGetFavoritesQuery } from '../services/favorites';

export const TestComponent = () => {
  const { data } = useGetFavoritesQuery();

  return <>Favorites length:{data?.length} </>;
};
