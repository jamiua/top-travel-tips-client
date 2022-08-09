import { Link } from "react-router-dom";
import "./Destination.scss";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Destination({singleDestination}) {
    const publicFolder = `${SERVER_URL}/images/`;
    const postDate = new Date(singleDestination.createdAt).toDateString('en-US');
    return (
        <main className="destination">
            {/* Refactor img source to generic link */}
            {singleDestination.image && <img className="destination__image" src={publicFolder + singleDestination.photo} alt="" /> }
            
            <div className="destination__details">
                <div className="destinationCats">
                    {singleDestination.categories.map((categories) => (
                        <span key={categories._id} className="destination__category">
                            {categories.categname}
                        </span>
                    ))}
                </div>
                <span className="destination__title">
                    {/* Refactor <Link className="link" to="/destinations?cat=Canada"> */}
                    <Link to={`/destination/${singleDestination._id}`} className="link">
                    {singleDestination.title}
                    </Link>
                </span>
                <hr />
                <span className="destination__date">{postDate}</span>
            </div>
            <p className="destination__desc">
            {singleDestination.desc}
            </p>
      </main>
    );
}

export default Destination;