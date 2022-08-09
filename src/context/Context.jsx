import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

const initial_user_state = {
    // Set inital user state to null if no user in localstorage otherwise get user info
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
};

export const Context = createContext(initial_user_state);

export const ContextProvider = ({ children }) => {
    // Import Reducer from context Reducer
    const [state, dispatch] = useReducer(Reducer, initial_user_state);

    useEffect(() => {
        // Get user information from local storage
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]);

  return (
    <Context.Provider
        value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
        }}
    >
        {children}
    </Context.Provider>
  );
};