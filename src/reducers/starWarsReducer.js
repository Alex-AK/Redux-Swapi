import {
  FETCH_DATA,
  FETCH_DATA_COMPLETE,
  FETCH_DATA_FAIL,
  INCREMENT_PAGE,
  INCREMENT_DATA,
  DECREMENT_PAGE,
  DECREMENT_DATA
} from '../actions';

const initialState = {
  characters: [],
  fetching: true,
  error: '',
  page: 1
};

export const charsReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        fetching: true,
        smallFetching: false,
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
    case INCREMENT_PAGE:
      return {
        ...state,
        page: action.page,
        smallFetching: true
      };
    case INCREMENT_DATA:
      return {
        ...state,
        characters: action.payload,
        smallFetching: false
      };
    case DECREMENT_PAGE:
      return {
        ...state,
        page: action.page,
        smallFetching: true
      };
    case DECREMENT_DATA:
      return {
        ...state,
        characters: action.payload,
        smallFetching: false
      };
    default:
      return state;
  }
};
