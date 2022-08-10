import './NavBar.scss';
import { Link } from "react-router-dom";
// import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
import T3Logo from '../../assets/logos/t3logo.png';
import { useContext } from "react";
import { Context } from "../../context/Context";

function NavBar() {
    // Import user and dispatch from contexts
    const {user, dispatch} = useContext(Context);
    // console.log(user);
    
    const handleUserLogout = () => {
        dispatch({ type: "LOGOUT" });
    };
    
    return (
        <nav className="navbar">
            <section className="navbar__left">
                <img className="navbar__left__logo" src={T3Logo} alt="Top Travel Tips Logo"/>
            </section>
            <section className="navbar__center">
                <ul className="navbar__list">
                    <li className="navbar__list__item">
                    <Link className="link" to="/">
                        home
                    </Link>
                    </li>
                    {/* <li className="navbar__list__item">about</li>
                    <li className="navbar__list__item">contact</li> */}
                    <li className="navbar__list__item">
                    <Link className="link" to="/newTopTravelTip">
                        add top travel tip
                    </Link>
                    </li>
                    <li className="navbar__list__item" onClick={handleUserLogout}>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </section>
            <section className="navbar__right">
                {user ? (
                    <Link className="link" to="/profile">
                        <img
                        className="navbar__right__img"
                        src={user.profilePic}
                        alt=""
                        />
                    </Link>
                ) : (
                    <ul className="navbar__list">
                        <li className="navbar__list__item">
                            <Link className="link" to="/login">
                                login
                            </Link>
                        </li>
                        <li className="navbar__list__item">
                            <Link className="link" to="/register">
                                register
                            </Link>
                        </li>
                    </ul>
                )}
                {/* <FaFacebookSquare className="navbar__right__icon"/> 
                <FaTwitterSquare className="navbar__right__icon"/> 
                <FaInstagramSquare className="navbar__right__icon"/> */}
            </section>
        </nav>
    );
}

export default NavBar;