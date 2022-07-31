import './Header.scss';
import tanzaniaHeader from '../../assets/images/headerimg.jpeg';

function Header() {
    return (
        <header className="header">
            <p className="header__title__small">Travel decisions made easy</p>
            <h1 className="header__title__large">Top Travel Tips</h1>
            <img className="header__image" src={tanzaniaHeader} alt="Dar Es Salam City Header"/>
        </header>
    );
}

export default Header;