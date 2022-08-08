import { Link } from "react-router-dom";
import "./Destination.scss";

// const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Destination({singleDestination, img}) {
    // const PF = `${SERVER_URL}/images/`;
    const postDate = new Date(singleDestination.createdAt).toDateString('en-US');
    return (
        <main className="destination">
            {singleDestination.image && <img className="destination__image" src={img} alt="" /> }
            
            <div className="destination__details">
                <div className="destinationCats">
                    {singleDestination.categories.map((categories) => (
                        <span key={categories._id} className="destination__cat">
                        {/* <Link className="link" to="/destinations?cat=Canada"> */}
                            {categories.categname}
                        {/* </Link> */}
                        </span>
                    ))}
                </div>
                <span className="destination__title">
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