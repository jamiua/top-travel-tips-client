import './Login.scss';
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="login">
            <h2 className="login__title">Login</h2>
            <form className="login__form">
                <label>Email</label>
                <input className="login__form__input" type="text" placeholder="Enter your email..." />
                <label>Password</label>
                <input className="login__form__input" type="password" placeholder="Enter your password..." />
                <button className="login__form__button">Login</button>
            </form>
            <button className="login__register__button">
                <Link className="link" to="/register">Register</Link>
            </button>
        </div>
    );
}

export default Login;