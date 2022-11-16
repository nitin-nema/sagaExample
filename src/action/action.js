import * as types from "./actionConstant";

export function getUser(users) {
    return {
        type: types.GET_USER_REQUESTED,
        payload :users
    }
}