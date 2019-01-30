// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_COMPLETE = 'FETCH_DATA_COMPLETE';
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL';

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const fetchData = () => dispatch => {
  return {
    type: FETCH_DATA,
    payload: 'yes'
  };
};
