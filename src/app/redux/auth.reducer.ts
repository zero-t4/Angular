import { omit } from 'lodash';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

const initialState = {
  status: LOGIN_FAIL,
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
      };

    case LOGIN_FAIL:
      return omit({...state}, 'token');

    default:
      return state;
  }
}
