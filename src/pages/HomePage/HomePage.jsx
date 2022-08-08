import './HomePage.scss';
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Hero from '../../components/Hero/Hero';
import Destinations from '../../components/Destinations/Destinations';
import SideBar from '../../components/SideBar/SideBar';


function HomePage() {
    const [destinationsData, setDestinations] = useState([]);
    const { search } = useLocation();
  
    useEffect(() => {
      const getDestinations = async () => {
        const response = await axios.get("/destinations" + search);
        console.log(response.data)
        setDestinations(response.data);
      };
      getDestinations();
    }, [search]);

    return (
        <>
            <Hero />
            <div className="home">
                <Destinations allDestinations={destinationsData} />
                <SideBar />
            </div>
        </>
    );
}

export default HomePage;