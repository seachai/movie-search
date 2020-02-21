import axios from "axios";

const LOADED = "LOADED";
const LOADING = "LOADING";
const ERROR = "ERROR";

// Action Creators
const fetchMoviesFromValue = value => async dispatch => {
  dispatch({ type: LOADING }); // 1st dispatch
  const apiUrl = `${process.env.REACT_APP_TMDB_URL}/search/movie`;
  const apiKey = process.env.REACT_APP_TMDB_API;
  const response = await axios({
    url: apiUrl,
    method: "GET",
    responseType: "json",
    params: {
      api_key: apiKey,
      language: "en-US",
      query: value
    }
  }).catch(error => {
    // 2nd dispatch if error caught
    dispatch({
      type: ERROR,
      payload: error
    });
  });

  dispatch({
    // 3rd fetched data success
    type: LOADED,
    payload: response.data
  });
};

//TODO: combine action creators into one

const fetchMovies = (url, value) => async dispatch => {
  dispatch({ type: LOADING }); // 1st dispatch

  const apiUrl = value
    ? `${process.env.REACT_APP_TMDB_URL}${url}${value.trim()}`
    : `${process.env.REACT_APP_TMDB_URL}${url}`;

  const apiKey = process.env.REACT_APP_TMDB_API;

  const response = await axios({
    url: apiUrl,
    method: "GET",
    responseType: "json",
    params: {
      api_key: apiKey,
      language: "en-US",
      query: value
    }
  }).catch(error => {
    // 2nd dispatch if error caught
    dispatch({
      type: ERROR,
      payload: error
    });
  });

  dispatch({
    // 3rd fetched data success
    type: LOADED,
    payload: response.data
  });
};

export default {
  fetchMoviesFromValue,
  fetchMovies
};
