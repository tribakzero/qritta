import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [ data, setData ] = useState({});
  useEffect(() => {
    fetch("http://localhost:3001/health")
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
