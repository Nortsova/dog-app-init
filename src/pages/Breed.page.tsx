import { useGetBreedsQuery } from '../services/breeds';

export const BreedPage = () => {
  const { data: breeds, isLoading } = useGetBreedsQuery();
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {(breeds || []).map(item => {
        console.log(item);
        return (
          <div key={item.id}>
            {item.name} ({item.origin})
            <img src={item.image.url} alt={item.name} width="300px" />
          </div>
        );
      })}
    </>
  );
};
