import { FETCH_DATA, FETCH_DATA_COMPLETE, FETCH_DATA_FAIL } from '../actions';

const initialState = {
  characters: [{ name: 'test' }],
  fetching: true,
  error: ''
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_DATA:
      console.log('fetch_data working');
      return {};
    case FETCH_DATA_COMPLETE:
      console.log('fetch_data working');
      return {};
    case FETCH_DATA_FAIL:
      console.log('fetch_data working');
      return {
        ...state,
        error: 'there has been an error'
      };

    default:
      return state;
  }
};
