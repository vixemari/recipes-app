import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Routes />
    </Provider>
  );
}

export default App;
