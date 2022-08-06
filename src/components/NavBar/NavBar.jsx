import './NavBar.scss';
import { Link } from "react-router-dom";
// import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
import T3Logo from '../../assets/logos/t3logo.png';

function NavBar() {
    const user = true;
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
                    <li className="navbar__list__item">about</li>
                    <li className="navbar__list__item">contact</li>
                    <li className="navbar__list__item">
                    <Link className="link" to="/newDestination">
                        new destination
                    </Link>
                    </li>
                    {user && <li className="navbar__list__item">logout</li>}
                </ul>
            </section>
            <section className="navbar__right">
                {/* <FaFacebookSquare className="navbar__right__icon"/> 
                <FaTwitterSquare className="navbar__right__icon"/> 
                <FaInstagramSquare className="navbar__right__icon"/> */}
                {user ? (
                    <Link className="link" to="/profile">
                        <img
                        className="navbar__right__img"
                        src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
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
            </section>
        </nav>
    );
}

export default NavBar;