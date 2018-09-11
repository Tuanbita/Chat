import { RECIVED_MESS, FETCHING } from '../actions/types';

const INITIAL_STATE = { fetching: false, messages: [] };

const chatReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCHING:
            return { ...INITIAL_STATE, fetching: true };
        case RECIVED_MESS: {
            return { ...state, fetching: false, messages: action.payload }
        }
        default: return state;
    }
};
export default chatReducers;
