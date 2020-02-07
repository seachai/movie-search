import axios from "axios";

const MOVIE = "MOVIE";

const getMovies = () => async (dispatch) => {
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
  });
  dispatch({
    type: MOVIE,
    payload: response.data
  });
};

export default getMovies;

//Action Creator
// const getMovies = value => async dispatch => {
//   const apiUrl = `https://api.themoviedb.org/3/search/multi`;
//   const apiKey = `ec7cf9725335473ff9bc286b6f5045a5`;
//   const response = await axios({
//     url: apiUrl,
//     method: "GET",
//     responseType: "json",
//     params: {
//       api_key: apiKey,
//       language: "en-US",
//       query: value
//     }
//   });

// const fetchTMDB = async () => {
//   const apiUrl = `https://api.themoviedb.org/3/movie/now_playing`;
//   const apiKey = "ec7cf9725335473ff9bc286b6f5045a5";
//   const response = await axios({
//     url: apiUrl,
//     method: "GET",
//     responseType: "json",
//     params: {
//       api_key: apiKey,
//       language: "en-US"
//     }
//   });
//   return (initialState.results = [...response.data.results]);
// };

// fetchTMDB();
