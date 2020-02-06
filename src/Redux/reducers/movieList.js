import axios from "axios";

const initialState = {
  results: [],
  initial: true
};

const MOVIE = "MOVIE";

const fetchTMDB = async () => {
  // https://api.themoviedb.org/3/movie/upcoming?api_key=ec7cf9725335473ff9bc286b6f5045a5&language=en-US&page=1
  // const apiUrl = `https://api.themoviedb.org/3/movie/upcoming`;
  // const apiUrl = `https://api.themoviedb.org/3/trending/all/week`;
  // const apiUrl = `https://api.themoviedb.org/3/search/multi`;
  const apiUrl = `https://api.themoviedb.org/3/movie/now_playing`;
  const apiKey = "ec7cf9725335473ff9bc286b6f5045a5";
  const response = await axios({
    url: apiUrl,
    method: "GET",
    responseType: "json",
    params: {
      api_key: apiKey,
      language: "en-US"
      // query: searchQuery
    }
  });
  return (initialState.results = [...response.data.results]);
};

fetchTMDB();

//Reducers
const movieList = (state = initialState, action) => {
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

export default movieList;
