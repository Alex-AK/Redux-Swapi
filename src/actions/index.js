// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_COMPLETE = 'FETCH_DATA_COMPLETE';
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL';
export const INCREMENT_PAGE = 'INCREMENT_PAGE';
export const INCREMENT_DATA = 'INCREMENT_DATA';
export const DECREMENT_PAGE = 'DECREMENT_PAGE';
export const DECREMENT_DATA = 'DECREMENT_DATA';

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const fetchData = () => dispatch => {
  dispatch({
    type: FETCH_DATA
  });
  axios
    .get(`https://swapi.co/api/people/`)
    .then(res =>
      dispatch({
        type: FETCH_DATA_COMPLETE,
        payload: res.data.results
      })
    )
    .catch(err =>
      dispatch({
        type: FETCH_DATA_FAIL,
        payload: 'Failed to load'
      })
    );
};

export const incrementPage = page => dispatch => {
  dispatch({
    type: INCREMENT_PAGE,
    page: page
  });
  axios
    .get(`https://swapi.co/api/people/?page=${page}`)
    .then(res =>
      dispatch({
        type: INCREMENT_DATA,
        payload: res.data.results
      })
    )
    .catch(err =>
      dispatch({
        type: FETCH_DATA_FAIL,
        payload: 'Failed to load'
      })
    );
};

export const decrementPage = page => dispatch => {
  dispatch({
    type: DECREMENT_PAGE,
    page: page
  });
  axios
    .get(`https://swapi.co/api/people/?page=${page}`)
    .then(res =>
      dispatch({
        type: DECREMENT_DATA,
        payload: res.data.results
      })
    )
    .catch(err =>
      dispatch({
        type: FETCH_DATA_FAIL,
        payload: 'Failed to load'
      })
    );
};
