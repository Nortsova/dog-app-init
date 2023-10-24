import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import * as stories from './FilterButton.stories';

describe('FilterButton', () => {
  const { Up, Down, Random } = composeStories(stories);
  it('should match snapshot Primary', () => {
    const { container } = render(<Up />);
    expect(container).toMatchSnapshot();
  });
  it('should match snapshot Secondary', () => {
    const { container } = render(<Down />);
    expect(container).toMatchSnapshot();
  });
  it('should match snapshot Secondary', () => {
    const { container } = render(<Random />);
    expect(container).toMatchSnapshot();
  });
});
