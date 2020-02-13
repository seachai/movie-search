const initialState = {
  loading: false,
  loaded: false,
  results: [],
  error: null
};

const LOADING = "LOADING";
const LOADED = "LOADED";
const ERROR = "ERROR";

// Reducers
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    case LOADED: {
      const { results } = action.payload;
      return {
        ...state,
        loaded: true,
        loading: false,
        results
      };
    }
    case ERROR: {
      const { error } = action.payload;
      return {
        ...state,
        loading: false,
        error
      };
    }
    default:
      return state;
  }
};

export default movieReducer;