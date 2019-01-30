import { FETCH_DATA, FETCH_DATA_COMPLETE, FETCH_DATA_FAIL } from '../actions';

const initialState = {
  characters: [],
  fetching: false,
  error: ''
};

export const charsReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        fetching: true,
        error: ''
      };
    case FETCH_DATA_COMPLETE:
      return {
        ...state,
        characters: action.payload,
        fetching: false,
        error: ''
      };
    case FETCH_DATA_FAIL:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
