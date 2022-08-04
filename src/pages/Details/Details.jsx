import "./Details.scss"; 
import SideBar from '../../components/SideBar/SideBar';
import DestinationDetails from '../../components/DestinationDetails/DestinationDetails';

function Details() {
    return (
        <div className="details">
            <DestinationDetails />
            <SideBar />
        </div>
    );
}

export default Details;