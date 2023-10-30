import { useParams } from 'react-router-dom';

export const BreedItemPage = () => {
  const { breedId } = useParams();
  return (
    <div>
      <h1>Breed: {breedId}</h1>
      <div>Here will be Gallery</div>
    </div>
  );
};
