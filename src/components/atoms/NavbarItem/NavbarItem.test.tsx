import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import React from 'react';
import * as stories from './NavbarItem.stories';

describe('NavbarItem', () => {
  const { Item } = composeStories(stories);
  it('should match snapshot Default', () => {
    const { container } = render(<Item />);
    expect(container).toMatchSnapshot();
  });
});
