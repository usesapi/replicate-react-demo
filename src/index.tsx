import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {init} from '@sapi/js-sdk';
import App from './App';

init({sapiId: process.env.REACT_APP_SAPI_ID});

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
