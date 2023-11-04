import { composeStories } from '@storybook/react';
import { fireEvent, render } from '@testing-library/react';
import * as stories from './Toggle.stories';
import { testSnapshot } from '../../../test/utils/snapshot.utils';

describe('Toggle Component', () => {
  const { ToggleComponent } = composeStories(stories);
  testSnapshot(<ToggleComponent />);

  it('Should expand toggle by click', () => {
    const { getByTestId, queryByTestId } = render(<ToggleComponent />);
    expect(queryByTestId('expanded')).not.toBeInTheDocument();
    const toggle = getByTestId('toggle-btn');
    fireEvent.click(toggle);
    expect(getByTestId('expanded')).toBeInTheDocument();
  });
});
