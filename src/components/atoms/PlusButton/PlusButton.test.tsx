import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import * as stories from './PlusButton.stories';

describe('PlusButton', () => {
  const { Default, Active } = composeStories(stories);
  it('should match snapshot Primary', () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
  it('should match snapshot Secondary', () => {
    const { container } = render(<Active />);
    expect(container).toMatchSnapshot();
  });
});
