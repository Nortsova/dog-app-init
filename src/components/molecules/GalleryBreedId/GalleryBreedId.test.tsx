import { composeStories } from '@storybook/react';
import * as stories from './GalleryBreedId.stories';
import { testSnapshot } from '../../../test/utils/snapshot.utils';

describe('GalleryBreedId', () => {
  const { Primary } = composeStories(stories);
  testSnapshot(<Primary />);
});
