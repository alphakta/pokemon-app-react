import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ErrorPage from './components/ErrorPage/error-page';
import PokemonList from './components/Pokemon/PokemonList/pokemon-list';
import PokemonDetail from './components/Pokemon/PokemonDetails/pokemon-detail';
import Navbar from './components/Navbar/navbar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/",
        element: <PokemonList />
      },
      {
        path: "/pokemons",
        element: <PokemonList />
      },
      {
        path: "/pokemon/:id",
        element: <PokemonDetail />
      }
    ],
    errorElement: <ErrorPage/>
  }

]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
