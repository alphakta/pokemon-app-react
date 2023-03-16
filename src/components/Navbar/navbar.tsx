import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

const Navbar: FunctionComponent = () => {

  return (
    <nav>
    <div className="nav-wrapper teal">
      <Link to="/" className='brand-logo center'>Pokédex</Link>
    </div>
  </nav>
  );
}

export default Navbar;