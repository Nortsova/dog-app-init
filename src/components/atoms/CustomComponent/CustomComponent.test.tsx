import { composeStories } from '@storybook/react';
import * as stories from './CustomComponent.stories';
import { testSnapshot } from '../../../test/utils/snapshot.utils';

describe('Custom Component', () => {
  const {
    ErrorCustomComponent,
    SuccessCustomComponent,
    LoadingCustomComponent,
    DefaultCustomComponent
  } = composeStories(stories);
  testSnapshot(<ErrorCustomComponent />);
  testSnapshot(<SuccessCustomComponent />);
  testSnapshot(<LoadingCustomComponent />);
  testSnapshot(<DefaultCustomComponent />);
});
