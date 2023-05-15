import { PayloadAction } from '@reduxjs/toolkit'

import {
    SET_ENABLED,
} from './settings.types';

const INITIAL_STATE = {
    enabled: true,
};

const reducer = (state = INITIAL_STATE, action: PayloadAction<any>) => {
    switch (action.type) {
        case SET_ENABLED:
            return {
                ...state,
                enabled: action.payload,
            };

        default:
            return state;
    }
};

export default reducer;
