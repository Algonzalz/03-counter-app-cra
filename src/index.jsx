import React from 'react';
import ReactDOM from 'react-dom/client';

// import {App} from './helloWorldApp'
import { FirtsApp } from './FirtsApp';

// import { CounterApp } from './CounterApp';

import './styles.css'

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <FirtsApp title="henry"/>
    </React.StrictMode>
); 