import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { DogAppThemeProvider } from './theme';
import {
  BreedListPage,
  BreedItemPage,
  VotePage,
  HistoryPage,
  UploadsPage
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: 'breed/:breedId',
        element: <BreedItemPage />
      },
      {
        path: 'breed',
        element: <BreedListPage />
      },
      {
        path: 'vote',
        element: <VotePage />
      },
      {
        path: 'history',
        element: <HistoryPage />
      },
      {
        path: 'uploads',
        element: <UploadsPage />
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
