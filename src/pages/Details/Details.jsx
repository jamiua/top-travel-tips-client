import "./Details.scss"; 
import DestinationDetails from '../../components/DestinationDetails/DestinationDetails';
import SideBar from '../../components/SideBar/SideBar';

function Details() {
    return (
        <div className="details">
            <DestinationDetails />
            <SideBar />
        </div>
    );
}

export default Details;