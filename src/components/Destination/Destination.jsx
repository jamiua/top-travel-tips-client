// import { Link } from "react-router-dom";
import "./Destination.scss";

function Destination({img}) {
    return (
        <main className="destination">
            <img
            className="destination__image"
            src={img}
            alt=""
            />
            <div className="destination__info">
                <div className="destinationCats">
                    <span className="destination__cat">
                    {/* <Link className="link" to="/destinations?cat=Canada"> */}
                        Canada
                    {/* </Link> */}
                    </span>
                    <span className="destination__cat">
                    {/* <Link className="link" to="/destinations?cat=States"> */}
                        United States
                    {/* </Link> */}
                    </span>
                </div>
                <span className="destination__title">
                    {/* <Link to="/destination/abc" className="link"> */}
                    Lorem ipsum dolor sit amet
                    {/* </Link> */}
                </span>
                <hr />
                <span className="destination__date">1 hour ago</span>
            </div>
            <p className="destination__desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
            fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
            atque, exercitationem quibusdam, reiciendis odio laboriosam?
            </p>
      </main>
    );
}

export default Destination;