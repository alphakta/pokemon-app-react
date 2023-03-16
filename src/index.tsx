import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/ErrorPage/error-page';
import PokemonList from './components/Pokemon/PokemonList/pokemon-list';
import PokemonDetail from './components/Pokemon/PokemonDetails/pokemon-detail';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/pokemons",
    element: <PokemonList />,
    errorElement: <ErrorPage/>
  },
  {
    path: "/pokemon/:id",
    element: <PokemonDetail />
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
