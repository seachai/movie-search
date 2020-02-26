const initialState = {
  loading: false,
  loaded: false,
  results: [],
  error: null,
  currentPage: 0,
  totalPages: 0,
  userLoggedIn: false,
  userEmail: ""
};

const LOADING = "LOADING";
const LOADED = "LOADED";
const ERROR = "ERROR";
const LOGGED_IN = "LOGGED_IN";

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
    case LOGGED_IN: {
      return {
        ...state,
        userLoggedIn: true,
        userEmail: action.payload
      };
    }
    default:
      return state;
  }
};

export default movieReducer;
