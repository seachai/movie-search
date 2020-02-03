import axios from "axios";

const INITIAL_STATE = {
  results: [],
  initial: true
};

const MOVIE = "MOVIE";

//Reducers
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MOVIE: {
      const { results } = action.payload;
      return {
        ...state,
        results,
        initial: false
      };
    }
    default:
      return state;
  }
};
export default reducer;

//Action Creator
export const findMovie = value => async dispatch => {
  const apiUrl = `https://api.themoviedb.org/3/search/multi`;
  const apiKey = `ec7cf9725335473ff9bc286b6f5045a5`;
  const response = await axios({
    url: apiUrl,
    method: "GET",
    responseType: "json",
    params: {
      api_key: apiKey,
      language: "en-US",
      query: value
    }
  });
  dispatch({
    type: MOVIE,
    payload: response.data
  });
};
