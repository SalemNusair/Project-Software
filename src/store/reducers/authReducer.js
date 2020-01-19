const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      return {
        ...state,
        authError: "Login failed"
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        authError: null
      };
    case "LOGOUT_SUCCESS":
      console.log("logout Success");
      return state;
    case "SIGNUP_SUCCESS":
      console.log("successfuly signup");
      return {
        ...state,
        authError: null
      };
    case "SIGNUP_ERROR":
      console.log("signup error");
      return {
        ...state,
        //action.err.message this will take from the action error in the catch
        authError: action.err.message
      };
    default:
      return state;
  }
};

export default authReducer;
