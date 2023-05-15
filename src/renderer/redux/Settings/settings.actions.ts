import {
    SET_ENABLED,
} from './settings.types';

export const setEnabled = (payload: any) => {
    return {
        type: SET_ENABLED,
        payload,
    };
};
