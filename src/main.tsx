import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { DogAppThemeProvider } from './theme';
import { BreedItemPage, BreedPage } from './pages';
import { MainPage } from './pages/Main.page';
import { FavoritesPage } from './pages/Favorites.page';
import { store } from './services/store';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Error 404</div>,
    children: [
      {
        path: 'breed/:breedId',
        element: <BreedItemPage />
      },
      {
        path: 'breed',
        element: <BreedPage />
      },
      {
        path: 'favorites',
        element: <FavoritesPage />
      },
      {
        path: '',
        element: <MainPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <DogAppThemeProvider>
        <RouterProvider router={router} />
      </DogAppThemeProvider>
    </Provider>
  </React.StrictMode>
);
