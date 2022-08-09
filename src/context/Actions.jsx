// Beginning of login
export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START",
});

// If login is successfull, return user credentials
export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
});

// If login is unsuccessfull, no return value
export const LoginFailure = () => ({
    type: "LOGIN_FAILURE",
});

// If logout is activated
export const Logout = () => ({
    type: "LOGOUT",
});
  
export const UpdateStart = (userCredentials) => ({
    type: "UPDATE_START",
});
  
export const UpdateSuccess = (user) => ({
    type: "UPDATE_SUCCESS",
    payload: user,
});
  
export const UpdateFailure = () => ({
    type: "UPDATE_FAILURE",
});