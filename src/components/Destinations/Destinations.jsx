import "./Destinations.scss";
import Destination from "../Destination/Destination";
//refactor img source

function Destinations({ allDestinations }) {
    return (
        <div className="destinations">
            {/* Map through destinations endpoint and return all destionations */}
            {allDestinations.map((oneDestination =>
                <Destination key={oneDestination._id} singleDestination={oneDestination} img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
            ))}
        </div>
    );
}

export default Destinations;