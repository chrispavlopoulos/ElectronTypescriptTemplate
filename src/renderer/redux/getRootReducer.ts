import { combineReducers } from 'redux';

import settingsReducer from './Settings/settings.reducer';

const getRootReducer = (): any => {
    return combineReducers({
        settings: settingsReducer,
    });
}

export default getRootReducer;
