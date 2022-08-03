import Sidebar from "../../components/SideBar/Sidebar";
import DestinationInfo from "../../components/DestinationInfo/DestinationInfo";
import "./details.scss";


function Details() {
    return (
        <div className="details">
            <DestinationInfo />
            <Sidebar />
            
        </div>
    );
}

export default Details;