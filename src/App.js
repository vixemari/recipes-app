// yaya
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes/index';
import Provider from './context/Provider';
import Font from './style/Font';

function App() {
  return (
    <Provider>
      <Font>
        <Routes />
      </Font>
    </Provider>
  );
}

export default App;
