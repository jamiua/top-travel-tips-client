const Reducer = (state, action) => {
    switch (action.type) {
        // If action context is login start, provide null for user and start fetching
        case "LOGIN_START":
            return {
                user: null,
                isFetching: true,
                error: false,
            };
        // If action context is login success, update user info and stop fetch
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false,
        };
        // If action context is login failure, no user info and error is activated
        case "LOGIN_FAILURE":
            return {
                user: null,
                isFetching: false,
                error: true,
            };
        // If action context is logout, user is rest to null and error is deactivated
        case "LOGOUT":
            return {
                user: null,
                isFetching: false,
                error: false,
            };
        case "UPDATE_START":
            return {
                ...state,
                isFetching:true
            };
        case "UPDATE_SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false,
            };
        case "UPDATE_FAILURE":
            return {
                user: state.user,
                isFetching: false,
                error: true,
            };
        // Default context
        default:
            return state;
    }
};

export default Reducer;