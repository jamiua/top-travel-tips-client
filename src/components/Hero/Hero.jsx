import './Hero.scss';
import heroImg from '../../assets/images/headerimg.jpg';

function Hero() {
    return (
        <header className="hero">
            <p className="hero__title__small">Travel decisions made easy</p>
            <h1 className="hero__title__large">Top Travel Tips</h1>
            <img className="hero__image" src={heroImg} alt="Homepage Hero"/>
        </header>
    );
}

export default Hero;