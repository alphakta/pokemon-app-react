import React, { useState }from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = useState('Test')
  // const name: String = "test";

  return (
    <div className="App">
        <h1> J'affiche mon nom : { name } </h1>
    </div>
  );
}

export default App;
