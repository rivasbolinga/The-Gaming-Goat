import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GamesProvider } from './context/data_context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <GamesProvider>
    <App />
  </GamesProvider>,
);
