import './Register.scss';
import { Link } from "react-router-dom";

function Register() {
    return (
        <div className="register">
            <h2 className="register__title">Register</h2>
            <form className="register__form">
                <label>Username</label>
                <input className="register__form__input" type="text" placeholder="Enter your username..." />
                <label>Email</label>
                <input className="register__form__input" type="text" placeholder="Enter your email..." />
                <label>Password</label>
                <input className="register__form__input" type="password" placeholder="Enter your password..." />
                <button className="register__form__button">Register</button>
            </form>
            <button className="register__login__button">
            <Link className="link" to="/login">Login</Link>
            </button>
        </div>
    );
}

export default Register;