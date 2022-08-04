import "./DestinationDetails.scss";
// import { Link } from "react-router-dom";
import editIcon from '../../assets/icons/pen-to-square.svg';
import deleteIcon from '../../assets/icons/trash-can.svg';

function DestinationDetails() {
    return (
        <div className="destinationdetails">
            <div className="destinationdetails__container">
                <img
                className="destinationdetails__img"
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                />
                <h1 className="destinationdetails__title">
                Lorem ipsum dolor
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
                        Test
                    {/* </Link> */}
                    </b>
                </span>
                <span>1 day ago</span>
                </div>
                <p className="destinationdetails__desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
                quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
                Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
                eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
                impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
                odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
                iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
                a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
                iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
                a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
                iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
                a odit modi eos!
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