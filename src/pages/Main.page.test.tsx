import { fireEvent, render } from '@testing-library/react';
import { testSnapshot } from '../test/utils/snapshot.utils';
import { MainPage } from './Main.page';
import { useGetImagesWithFavorites } from '../utilities';

const addFavoriteMock = jest.fn();

jest.mock('../utilities', () => ({
  useGetImagesWithFavorites: jest.fn()
}));

jest.mock('../services/favorites', () => ({
  useAddFavoritesMutation: () => [addFavoriteMock]
}));

jest.mock('./TestComponent', () => ({
  TestComponent: () => <div>TestComponent</div>
}));

describe('Main Page', () => {
  beforeEach(() => {
    (useGetImagesWithFavorites as jest.Mock).mockImplementation(() => ({
      data: [
        { id: '1', url: 'url1', isFavorite: false },
        { id: '2', url: 'url2', isFavorite: true },
        { id: '3', url: 'url3', isFavorite: false }
      ],
      isLoading: false
    }));
  });
  testSnapshot(<MainPage />);

  it('Should add favorite', () => {
    const { getByTestId } = render(<MainPage />);
    const btn = getByTestId('like-btn-1');
    fireEvent.click(btn);
    expect(addFavoriteMock).toBeCalled();
  });

  it('Should increment page on Next page button click', () => {
    const { getByTestId, getByText } = render(<MainPage />);
    const nextPageButton = getByTestId('btn-next');
    fireEvent.click(nextPageButton);
    expect(getByText('PAGE: 1')).toBeInTheDocument();
  });

  it('Should decrement page on Previous page button click', () => {
    const { getByTestId, getByText, queryByText } = render(<MainPage />);
    const nextPageButton = getByTestId('btn-next');
    const prevPageButton = getByTestId('btn-prev');

    // Increment page to 1
    fireEvent.click(nextPageButton);
    expect(getByText('PAGE: 1')).toBeInTheDocument();

    // Decrement page back to 0
    fireEvent.click(prevPageButton);
    expect(queryByText('PAGE: 0')).not.toBeInTheDocument();
  });

  it('Should show loading state', () => {
    (useGetImagesWithFavorites as jest.Mock).mockImplementation(() => ({
      data: [],
      isLoading: true
    }));
    const { getByText } = render(<MainPage />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });
  it('Should render empty list', () => {
    (useGetImagesWithFavorites as jest.Mock).mockImplementation(() => ({
      isLoading: false,
      data: undefined
    }));

    const { container } = render(<MainPage />);
    expect(container).toMatchSnapshot();
  });
});
