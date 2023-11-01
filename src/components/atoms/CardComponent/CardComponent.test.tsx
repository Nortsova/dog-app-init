import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import * as stories from './CardComponent.stories';

describe('CardComponent', () => {
  const { Primary, Secondary } = composeStories(stories);
  it('should match snapshot CardComponent Primary', () => {
    const { container } = render(<Primary />);
    expect(container).toMatchSnapshot();
  });
  it('should match snapshot CardComponent Secondary', () => {
    const { container } = render(<Secondary />);
    expect(container).toMatchSnapshot();
  });
});
