import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import * as stories from './NavbarItem.stories';

describe('NavbarItem', () => {
  const { Default } = composeStories(stories);
  it('should match snapshot Default', () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
});
