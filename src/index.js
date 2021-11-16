import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

import UsuarioProvider from './context/UsuarioProvider'
import LibrosProvider from './context/LibrosProvider'

ReactDOM.render(
  <React.StrictMode>
    <UsuarioProvider>
      <LibrosProvider>

        <App />
        
      </LibrosProvider>
    </UsuarioProvider>
  </React.StrictMode>,
  document.getElementById('root')
);