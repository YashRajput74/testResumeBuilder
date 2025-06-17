import React from 'react';
import ReactDom from 'react-dom/client';
import { makeServer } from './Mirage/server.js';
import App from './App.jsx'

makeServer();

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
