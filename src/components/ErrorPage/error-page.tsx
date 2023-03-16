import { Link, useRouteError } from "react-router-dom";
import React, { FunctionComponent } from 'react';

const ErrorPage: FunctionComponent = () => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="center">
      <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png" alt="Page non trouvée" />
      <h1>Hey, cette page n'existe pas !</h1>
      <i>{error.statusText || error.message}</i>
      <Link to="/" className="waves-effect waves-teal btn-flat">
        Retourner à l'accueil
      </Link>
    </div>
  );
}

export default ErrorPage;