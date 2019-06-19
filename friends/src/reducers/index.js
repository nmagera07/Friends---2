import {FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR} from "../actions";
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
    
      case FETCH_DATA_START:
        return {
          ...state,
          fetching: true,
        }
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          fetching: false,
          friends: [...state.characters, ...action.payload]
        }
      case FETCH_DATA_ERROR:
        return {
          ...state,
          fetching: false,
          error: 'Sorry, something went wrong!'
        }
    
    default:
      return state;
  }
};