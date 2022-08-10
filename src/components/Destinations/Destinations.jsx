import "./Destinations.scss";
import Destination from "../Destination/Destination";
//refactor img source

function Destinations({ allDestinations }) {
    return (
        <div className="destinations">
            {/* Map through destinations endpoint and return all destionations */}
            {allDestinations.slice(0).reverse().map((oneDestination =>
                <Destination key={oneDestination._id} singleDestination={oneDestination}/>
            ))}
        </div>
    );
}

export default Destinations;