import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'App.jsx';
import { BrowserRouter } from 'react-router-dom';

import 'fontawesome';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
