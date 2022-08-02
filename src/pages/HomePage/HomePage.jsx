import './HomePage.scss';
import Hero from '../../components/Hero/Hero';
import Destinations from '../../components/Destinations/Destinations';
import SideBar from '../../components/SideBar/SideBar';

function HomePage() {
    return (
        <>
            <Hero />
            <div className="home">
                <Destinations />
                <SideBar />
            </div>
        </>
    );
}

export default HomePage;