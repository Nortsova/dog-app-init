import { composeStories } from '@storybook/react';
import * as stories from './IconDogFoot.stories';
import { testSnapshot } from '../../../test/utils/snapshot.utils';

describe('IconDogFoot', () => {
  const { Primary, Secondary } = composeStories(stories);
  testSnapshot(<Primary />);
  testSnapshot(<Secondary />);
});
