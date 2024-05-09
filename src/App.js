import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';


function App() {

// Define un estado para almacenar los datos obtenidos de la API
  const [apiData, setApiData] = useState(null);

  // Define una función para cargar los datos de la API
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/data');
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Cargar los datos de la API cuando el componente se monta
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;




