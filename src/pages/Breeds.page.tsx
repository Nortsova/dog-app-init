import { useState } from 'react';
import { Gallery } from '../components/molecules/Gallery';
import { PaginationWrap } from '../components/organisms/PaginationWrap';
import { useGetBreedsQuery } from '../services/breeds';

export const BreedsPage = () => {
  const [page, setPage] = useState(1);
  const { isLoading } = useGetBreedsQuery({ limit: 6, page });

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <>
      <Gallery page={page} />
      {!isLoading && <PaginationWrap page={page} handleChange={handleChange} />}
    </>
  );
};
