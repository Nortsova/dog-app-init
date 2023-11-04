import { renderHook, waitFor } from '@testing-library/react';
import { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import fetchMock from 'jest-fetch-mock';
import { useGetFavoritesQuery } from './favorites';
import { store } from './store';

const Wrapper: FC<PropsWithChildren> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

describe('favorites api', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });
  beforeAll(() => {
    fetchMock.mockOnceIf('/favourites', () =>
      Promise.resolve({
        status: 200,
        body: JSON.stringify([])
      })
    );
  });
  it('renders hook with empty array', async () => {
    const { result } = renderHook(() => useGetFavoritesQuery(), {
      wrapper: Wrapper
    });

    // Initial state should be 'pending'
    expect(result.current).toMatchObject({
      status: 'pending',
      endpointName: 'getFavorites',
      isLoading: true,
      isSuccess: false,
      isError: false,
      isFetching: true
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(fetchMock.mock.calls.length).toBe(1);

    expect(result.current).toMatchObject({
      status: 'fulfilled',
      endpointName: 'getFavorites',
      isLoading: false,
      isSuccess: true,
      isError: false,
      isFetching: false
    });
  });
});
