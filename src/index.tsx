import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Routes,
    Route,
} from "react-router-dom";
import './renderer/index.css';

import Main from './renderer/react/components/Main';


ReactDOM.render(
    <React.StrictMode>
            <HashRouter>
                <Routes>
                    <Route path="/" element={ <Main /> } />
                </Routes>
            </HashRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
