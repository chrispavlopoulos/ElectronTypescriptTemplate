import { configureStore } from '@reduxjs/toolkit';
import getRootReducer from './getRootReducer';


export default ({ 
    initialState = {},
} : {
    initialState?: any,
}) => {

    const store = configureStore({
        reducer: getRootReducer()
    });

    return store;
};
