import './Hero.scss';
import tanzaniaHero from '../../assets/images/headerimg.jpeg';

function Hero() {
    return (
        <header className="hero">
            <p className="hero__title__small">Travel decisions made easy</p>
            <h1 className="hero__title__large">Top Travel Tips</h1>
            <img className="hero__image" src={tanzaniaHero} alt="Dar Es Salam City Header"/>
        </header>
    );
}

export default Hero;