// import { Link } from "react-router-dom";
import './NavBar.scss';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
import T3Logo from '../../assets/logos/t3logo.png';

function NavBar() {
    return (
        <nav className="navbar">
            <section className="navbar__left">
                <img className="navbar__left__logo" src={T3Logo} alt="Top Travel Tips Logo"/>
            </section>
            <section className="navbar__center">
                <ul className="navbar__center__list">
                    <li className="navbar__center__list__item">
                    {/* <Link className="link" to="/"> */}
                        home
                    {/* </Link> */}
                    </li>
                    <li className="navbar__center__list__item">about</li>
                    <li className="navbar__center__list__item">contact</li>
                    <li className="navbar__center__list__item">new destination</li>
                </ul>
            </section>
            <section className="navbar__right">
                <FaFacebookSquare className="navbar__right__icon"/> 
                <FaTwitterSquare className="navbar__right__icon"/> 
                <FaInstagramSquare className="navbar__right__icon"/>
            </section>
        </nav>
    );
}

export default NavBar;