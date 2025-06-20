import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';  // Import the CSS file

import App from './App';  // Import your main App component

// This is the entry point for your React application
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')  // This is where the app will render
);
