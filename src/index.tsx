import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import initStore from './renderer/redux/initStore';
import {
    HashRouter,
    Routes,
    Route,
} from "react-router-dom";

import './renderer/index.css';
import Main from './renderer/react/components/Main';

const store = initStore({});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <Routes>
                    <Route path="/" element={ <Main /> } />
                </Routes>
            </HashRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
