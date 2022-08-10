import "./DestinationDetails.scss";
import axios from "axios";
import { useEffect, useState } from "react";
// import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import editIcon from '../../assets/icons/pen-to-square.svg';
import deleteIcon from '../../assets/icons/trash-can.svg';
// import { Context } from "../../context/Context";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function DestinationDetails() {
    const publicFolder = `${SERVER_URL}/images/`;
    const location = useLocation();
    // Use location hook to get path for individual destination details
    const path = location.pathname.split("/")[2];
    // Initial state for individual destination detail is set to empty object
    const [singleDestination, setDestination] = useState({});
    const postDate = new Date(singleDestination.createdAt).toDateString('en-US');

    useEffect(() => {
        const getDestination = async () => {
            const response = await axios.get("/destinations/" + path);
            setDestination(response.data);
        };
        getDestination();
    }, [path]);

    return (
        <div className="destinationdetails">
            <div className="destinationdetails__container">
                {singleDestination.photo && 
                    <img className="destinationdetails__img" src={publicFolder + singleDestination.photo} alt=""/>
                }
                <h1 className="destinationdetails__title">
                {singleDestination.title}
                <div className="destinationdetails__edit">
                    <img src={editIcon} alt="Edit Icon" className="destinationdetails__icon edit" />
                    <img src={deleteIcon} alt="Delete Icon" className="destinationdetails__icon delete" />
                </div>
                </h1>
                <div className="destinationdetails__poster">
                <span className="destinationdetails__author">
                    Author: {" "}
                    <b >
                    <Link to={`/?user=${singleDestination.username}`} className="link">
                        {singleDestination.username}
                    </Link>
                    </b>
                </span>
                <span>{postDate}</span>
                </div>
                <p className="destinationdetails__desc">
                {singleDestination.desc}
                
                {/* <br />
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
                quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
                Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
                eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit.  */}
                </p>
            </div>
        </div>
    );
}

export default DestinationDetails;