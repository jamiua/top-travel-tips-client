import "./Details.scss"; 
import SideBar from '../../components/SideBar/SideBar';
import DestinationInfo from '../../components/DestinationInfo/DestinationInfo';

function Details() {
    return (
        <div className="details">
            <DestinationInfo />
            <SideBar />
            
        </div>
    );
}

export default Details;