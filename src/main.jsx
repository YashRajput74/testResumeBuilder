import React from 'react';
import ReactDOM from 'react-dom/client';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { makeServer } from './Mirage/server.js';
import App from './App.jsx';

makeServer();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>
  </React.StrictMode>
);




// import React from 'react';
// import DndProvider from 'react-dnd';
// import ReactDom from 'react-dom/client';
// import { makeServer } from './Mirage/server.js';
// import App from './App.jsx'

// makeServer();

// ReactDom.createRoot(document.getElementById("root")).render(
//   <DndProvider backend={HTML5Backend}>
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//   </DndProvider>
// );
