const initialState = {
  loading: false,
  loaded: false,
  results: [],
  error: null,
  currentPage: 0,
  totalPages: 0
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
      const { results, page, total_pages } = action.payload;
      return {
        ...state,
        loaded: true,
        loading: false,
        results,
        currentPage: page,
        totalPages: total_pages
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
