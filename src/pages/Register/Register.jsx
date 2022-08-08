import axios from "axios";
import { useState } from "react";
import './Register.scss';
import { Link } from "react-router-dom";

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(false);
        try {
            const response = await axios.post("/auth/register", {
                username,
                email,
                password,
          });
            response.data && window.location.replace("/login");
        } catch (err) {
          setError(true);
        }
    };

    return (
        <div className="register">
            <h2 className="register__title">Register</h2>
            <form className="register__form" onSubmit={handleSubmit}>
                <label>Username</label>
                <input className="register__form__input" type="text" placeholder="Enter your username..." 
                    onChange={(event) => setUsername(event.target.value)}/>
                <label>Email</label>
                <input className="register__form__input" type="text" placeholder="Enter your email..." 
                    onChange={(event) => setEmail(event.target.value)}/>
                <label>Password</label>
                <input className="register__form__input" type="password" placeholder="Enter your password..." 
                    onChange={(event) => setPassword(event.target.value)}/>
                <button className="register__form__button" type="submit">Register</button>
            </form>
            <button className="register__login__button">
            <Link className="link" to="/login">Login</Link>
            </button>
            {error && <span style={{color:"red", marginTop:"1rem"}}>Error with registration!</span>}
        </div>
    );
}

export default Register;