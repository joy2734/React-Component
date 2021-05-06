import {
    ADD_BAMBOO_CNT,
    ADD_BLACK_STD_CNT,
    ADD_MAHOGANY_CNT,
    TOGGLE_OPEN,
    TOGGLE_BOOKMARK
} from '../actions/ActionTypes';

export const ToggleReducer = (state={open: false}, action ) =>{
    switch(action.type){
        case TOGGLE_OPEN:
            return {...state, open: !action.payload}
        default:
            return state;
    }
}

export const CroudCounterReducer = (state = [], action) => {
    switch(action.type){
        default:
            return state;
    }
}

export const ProjectLeftCountReducer = (state = {bambooStdCount:0, blackEdStdCount:0, mahoganySpcEdCount:0}, action) => {
    switch(action.type){
        case 'ADD_BAMBOO_COUNT':
            return {...state, bambooStdCount: action.payload + 1};
        case 'ADD_BLACKSTD_COUNT':
            return {...state, blackEdStdCount: action.payload + 1};
        case 'ADD_MAHOGANY_COUNT':
            return {...state, mahoganySpcEdCount: action.payload + 1}
        default:
            return state;
    }
}