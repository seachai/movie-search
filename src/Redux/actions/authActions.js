const LOGGED_IN = "LOGGED_IN";

const userLogin = currentUser => async dispatch => {
  dispatch({
    // 3rd fetched data success
    type: LOGGED_IN,
    payload: currentUser
  });
};

export default {
  userLogin
};
