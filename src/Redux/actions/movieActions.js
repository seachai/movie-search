import axios from "axios";

const MOVIE = "MOVIE";

// Action Creator
const getMovies = (value) => async (dispatch) => {
  const apiUrl = `https://api.themoviedb.org/3/search/movie`;
  const apiKey = "ec7cf9725335473ff9bc286b6f5045a5";
  const response = await axios({
    url: apiUrl,
    method: "GET",
    responseType: "json",
    params: {
      api_key: apiKey,
      query: value
    }
  });
  dispatch({
    type: MOVIE,
    payload: response.data
  });
};

export default getMovies;
