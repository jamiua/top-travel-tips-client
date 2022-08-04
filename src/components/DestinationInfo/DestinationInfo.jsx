import "./DestinationInfo.scss";
// import { Link } from "react-router-dom";
import editIcon from '../../assets/icons/pen-to-square.svg';
import deleteIcon from '../../assets/icons/trash-can.svg';

function DestinationInfo() {
    return (
        <div className="destinationinfo">
            <div className="destinationinfo__container">
                <img
                className="destinationinfo__img"
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                />
                <h1 className="destinationinfo__title">
                Lorem ipsum dolor
                <div className="destinationinfo__edit">
                    <img src={editIcon} alt="Edit Icon" className="destinationinfo__icon" />
                    <img src={deleteIcon} alt="Delete Icon" className="destinationinfo__icon" />
                </div>
                </h1>
                <div className="destinationinfo__poster">
                <span>
                    Author:
                    <b className="destinationinfo__author">
                    {/* <Link className="link" to="/destinations?username=Test"> */}
                        Test
                    {/* </Link> */}
                    </b>
                </span>
                <span>1 day ago</span>
                </div>
                <p className="destinationinfo__desc">
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

export default DestinationInfo;