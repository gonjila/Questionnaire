import * as actionTypes from '../action-types/information-types';

const initialState = {
    secondPage: {},
    thirdPage: {},
    forthPage: {},
    fifthPage: {},
};

const informationReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_SECOND_PAGE:
            return {
                ...state,
                secondPage: action.payload,
            };
        case actionTypes.ADD_THIRD_PAGE:
            return {
                ...state,
                thirdPage: action.payload,
            };
        case actionTypes.ADD_FOURTH_PAGE:
            return {
                ...state,
                forthPage: action.payload,
            };
        case actionTypes.ADD_FIFTH_PAGE:
            return {
                ...state,
                fifthPage: action.payload,
            };
        default:
            return state;
    }
};

export default informationReducer;
