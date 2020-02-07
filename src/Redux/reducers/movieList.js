const initialState = {
  results: [],
  initial: true
};

const MOVIE = "MOVIE";

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
