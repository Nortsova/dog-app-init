import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import { DogAppThemeProvider } from './theme';
import { BreedItemPage, BreedPage } from './pages';

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
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DogAppThemeProvider>
      <RouterProvider router={router} />
    </DogAppThemeProvider>
  </React.StrictMode>
);
