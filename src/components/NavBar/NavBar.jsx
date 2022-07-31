import './NavBar.scss';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
import T3Logo from '../../assets/logos/t3logo.png';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar__left">
                <img className="navbar__left__logo" src={T3Logo} alt="Top Travel Tips Logo"/>
            </div>
            <div className="navbar__center">
                <ul className="navbar__center__list">
                    <li className="navbar__center__list__item">home</li>
                    <li className="navbar__center__list__item">about</li>
                    <li className="navbar__center__list__item">contact</li>
                    <li className="navbar__center__list__item">details</li>
                </ul>
            </div>
            <div className="navbar__right">
                <FaFacebookSquare className="navbar__right__icon"/> <FaTwitterSquare  className="navbar__right__icon"/> <FaInstagramSquare  className="navbar__right__icon"/>
            </div>
        </nav>
    );
}

export default NavBar;