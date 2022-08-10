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
                : <img className="destination__image" src="https://images.unsplash.com/photo-1526735334552-daff0bd6d53f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="" /> 
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