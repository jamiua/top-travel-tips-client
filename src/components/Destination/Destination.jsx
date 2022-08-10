import { Link } from "react-router-dom";
import "./Destination.scss";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Destination({singleDestination}) {
    const publicFolder = `${SERVER_URL}/images/`;
    const postDate = new Date(singleDestination.createdAt).toDateString('en-US');
    return (
        <main className="destination">
            {singleDestination.photo ? 
                <img className="destination__image" src={publicFolder + singleDestination.photo} alt="" />
                : <img className="destination__image" src={publicFolder + "placeholder.avif"} alt="beach view placeholder" /> 
            }
            <div className="destination__details"> 
                <div className="destinationCats">
                    {singleDestination.categories.map((categories) => (
                        <span key={categories._id} className="destination__category">
                            {categories.categname}
                        </span>
                    ))}
                </div>
                <Link to={`/destination/${singleDestination._id}`} className="link">
                    <span className="destination__title">
                        {singleDestination.title}
                    </span>
                </Link>
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