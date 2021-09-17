import * as actionTypes from '../action-types/information-types';

export function addSecondpageInfo(payload) {
    return { type: actionTypes.ADD_SECOND_PAGE, payload };
}

export function addThirdpageInfo(payload) {
    return { type: actionTypes.ADD_THIRD_PAGE, payload };
}

export function addForthpageInfo(payload) {
    return { type: actionTypes.ADD_FOURTH_PAGE, payload };
}

export function addFifthpageInfo(payload) {
    return { type: actionTypes.ADD_FIFTH_PAGE, payload };
}
