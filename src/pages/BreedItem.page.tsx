import { useParams } from 'react-router-dom';
import { GalleryBreedId } from '../components/molecules/GalleryBreedId';

export const BreedItemPage = () => {
  const { breedId } = useParams();

  return <GalleryBreedId breedId={breedId} />;
};
