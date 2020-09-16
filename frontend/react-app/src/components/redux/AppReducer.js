import { actions } from "./AppActions";

const { CREATE_ACCOUNT_SUCCESS, FORGOT_PASSWORD_SUCCESS, LOGIN_SUCCESS } = actions;

const initializedState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    isLoading: false,
    error: null
}

const authReducer = (state = initializedState, action) => {
    switch (action.type) {
      case CREATE_ACCOUNT_SUCCESS:
      case LOGIN_SUCCESS:
        return {
          ...state,
          ...action.payload,
          isLoading: false
        };
      default:
        return state;
    }
  };
  
  export default authReducer;