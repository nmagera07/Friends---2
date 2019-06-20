import {LOGIN, LOGIN_SUCCESS, LOGIN_ERROR} from "../actions";
const initialState = {
  friends: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const reducer = (state = initialState, action) => {
  
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    
      case LOGIN:
        return {
          ...state,
          fetching: true,
        }
      case LOGIN_SUCCESS:
        return {
          ...state,
          fetching: false,
          friends: action.payload
        }
      case LOGIN_ERROR:
        return {
          ...state,
          fetching: false,
          error: `${action.payload}`
        }
    
    default:
      return state;
  }
};