import axios from 'axios';

// possible actions to manipulate state
const APP_LOADING = "APP_LOADING";
const LOADING_COMPLETE = "LOADING_COMPLETE";
const CREATE_ACCOUNT_SUCCESS = "CREATE_ACCOUNT_SUCCESS";
const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";

// action creators - sends to reducer
export const LoginSuccess = (data, history) => (dispatch) => {
    dispatch({ type: APP_LOADING });
  
    const { email: username, password } = data;
  
    axiosWithAuth()
      .post("/login", { username, password })
      .then((res) => {
        localStorage.setItem("idToken", res.data.token);
        const user = res.data;
  
        // stores token and user in localstorage for reducer to grab as initial state on page refresh;
        localStorage.setItem("user", JSON.stringify(user));
        dispatch({ type: LOADING_COMPLETE });
        dispatch({ type: LOGIN_SUCCESS, payload: user });
        // history.push("/dashboard");
      })
      .catch((err) => dispatch({ type: APP_ERROR, payload: err.message }));
  };
  


export const CreateAccountSuccess = (data) => dispatch => {
    dispatch({ type: CREATE_ACCOUNT_SUCCESS, payload: data });
}