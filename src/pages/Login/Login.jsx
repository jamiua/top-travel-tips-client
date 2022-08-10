import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import './Login.scss';
import { Context } from "../../context/Context";

function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    // Get dispatch and fetch status from context
    const { dispatch, isFetching } = useContext(Context);

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            // Submit login information entered by client
            const response = await axios.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            });
            // If login is successful, send login data as payload
            dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
        } catch (err) {
            // If login failed, no user data to send so return null
            dispatch({ type: "LOGIN_FAILURE" });
        }
    };


    return (
        <div className="login">
            <h2 className="login__title">Login</h2>
            <form className="login__form" onSubmit={handleLoginSubmit}>
                <label >Username</label>
                <input className="login__form__input" type="text" placeholder="Enter your username..." ref={userRef}/>
                <label>Password</label>
                <input className="login__form__input" type="password" placeholder="Enter your password..." ref={passwordRef}/>
                <button className="login__form__button" type="submit" disabled={isFetching}>Login</button>
            </form>
            <button className="login__register__button">
                <Link className="link" to="/register">Register</Link>
            </button>
        </div>
    );
}

export default Login;