import axios from "axios";

const LOADED = "LOADED";
const LOADING = "LOADING";
const ERROR = "ERROR";

// Action Creators
const fetchMoviesFromValue = value => async dispatch => {
  dispatch({ type: LOADING }); // 1st dispatch
  const apiUrl = `https://api.themoviedb.org/3/search/movie`;
  const apiKey = "ec7cf9725335473ff9bc286b6f5045a5";
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

const fetchNowPlayingMovies = () => async dispatch => {
  dispatch({ type: LOADING }); // 1st dispatch

  const apiUrl = `https://api.themoviedb.org/3/movie/now_playing`;
  const apiKey = "ec7cf9725335473ff9bc286b6f5045a5";
  const response = await axios({
    url: apiUrl,
    method: "GET",
    responseType: "json",
    params: {
      api_key: apiKey,
      language: "en-US"
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

const fetchUpcomingMovies = () => async dispatch => {
  dispatch({ type: LOADING }); // 1st dispatch

  const apiUrl = `https://api.themoviedb.org/3/movie/upcoming`;
  const apiKey = "ec7cf9725335473ff9bc286b6f5045a5";
  const response = await axios({
    url: apiUrl,
    method: "GET",
    responseType: "json",
    params: {
      api_key: apiKey,
      language: "en-US"
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

const fetchTrendingMovies = () => async dispatch => {
  dispatch({ type: LOADING }); // 1st dispatch

  const apiUrl = `https://api.themoviedb.org/3/trending/all/week`;
  const apiKey = "ec7cf9725335473ff9bc286b6f5045a5";
  const response = await axios({
    url: apiUrl,
    method: "GET",
    responseType: "json",
    params: {
      api_key: apiKey,
      language: "en-US"
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
  fetchNowPlayingMovies,
  fetchUpcomingMovies,
  fetchTrendingMovies
};
