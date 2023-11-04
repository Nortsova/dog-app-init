import { renderHook } from '@testing-library/react';
import { useGetImagesWithFavorites } from '.';
import { useTypedSelector } from '../../services/store';
import { useGetImagesQuery } from '../../services/images';
import { useGetFavoritesQuery } from '../../services/favorites';
import { selectImagesWithFavorites } from '../../services/selectors';

jest.mock('../../services/favorites', () => ({
  useGetFavoritesQuery: jest.fn()
}));

jest.mock('../../services/images', () => ({
  useGetImagesQuery: jest.fn()
}));

jest.mock('../../services/store', () => ({
  useTypedSelector: jest.fn()
}));

jest.mock('../../services/selectors', () => ({
  selectImagesWithFavorites: jest.fn()
}));

describe('useGetImagesWithFavorites', () => {
  it('Should add favorite', () => {
    const mockImagesQuery = { isLoading: false };
    const mockFavoritesQuery = { isLoading: false };
    const mockFavoritedImages = [
      { id: '1', url: 'image1.jpg', isFavorite: true }
    ];

    // Mock implementations
    (useGetImagesQuery as jest.Mock).mockReturnValue(mockImagesQuery);
    (useGetFavoritesQuery as jest.Mock).mockReturnValue(mockFavoritesQuery);
    (useTypedSelector as jest.Mock).mockReturnValue(mockFavoritedImages);
    (selectImagesWithFavorites as jest.Mock).mockReturnValue(
      () => mockFavoritedImages
    );

    const { result } = renderHook(() => useGetImagesWithFavorites({ page: 1 }));

    expect(result.current.data).toEqual(mockFavoritedImages);
    expect(result.current.isLoading).toEqual(
      mockImagesQuery.isLoading || mockFavoritesQuery.isLoading
    );
  });
});
