// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './components/App.jsx';
// import './styles/login.scss';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';

// ReactDOM.render(<App />, document.getElementById('root'));

//Using Stritct mode to get around React17


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
   <App />
 </React.StrictMode>
);