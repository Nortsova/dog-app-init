import { useParams } from 'react-router-dom';
import { Gallery } from '../components/organisms/Gallery';

export const BreedItemPage = () => {
  const { breedId } = useParams();
  return (
    <div>
      <h1>Breed: {breedId}</h1>
      <Gallery />
    </div>
  );
};
