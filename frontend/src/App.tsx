import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [ data, setData ] = useState({});
  useEffect(() => {
    // TO-DO: Make this conditional based on the env variable to see which environment it is running and change for localhost
    fetch("https://qritta-backend.herokuapp.com/health")
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="QRittā" />
      </header>
      <div className="main-content">
        {JSON.stringify(data)}
      </div>
    </div>
  );
}

export default App;
