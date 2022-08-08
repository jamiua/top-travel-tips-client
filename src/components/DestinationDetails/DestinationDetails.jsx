import "./DestinationDetails.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import editIcon from '../../assets/icons/pen-to-square.svg';
import deleteIcon from '../../assets/icons/trash-can.svg';

function DestinationDetails() {
    const location = useLocation();
    // Use location hook to get path for individual destinaion details
    const path = location.pathname.split("/")[2];
    // Initial state for individual destination detail is set to empty array
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
                {singleDestination.image && (
                    <img className="destinationdetails__img" src={singleDestination.image} alt=""/>
                    // src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                )}
                <h1 className="destinationdetails__title">
                {singleDestination.title}
                <div className="destinationdetails__edit">
                    <img src={editIcon} alt="Edit Icon" className="destinationdetails__icon" />
                    <img src={deleteIcon} alt="Delete Icon" className="destinationdetails__icon" />
                </div>
                </h1>
                <div className="destinationdetails__poster">
                <span>
                    Author:
                    <b className="destinationdetails__author">
                    {/* <Link className="link" to="/destinations?username=Test"> */}
                        {singleDestination.username}
                    {/* </Link> */}
                    </b>
                </span>
                <span>{postDate}</span>
                </div>
                <p className="destinationdetails__desc">
                {singleDestination.desc}
                
                <br />
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
                quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
                Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
                eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
                impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
                odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
                iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
                a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
                </p>
            </div>
        </div>
    );
}

export default DestinationDetails;