import './NewDestination.scss';
import uploadIcon from "../../assets/icons/upload.svg";

function NewDestination() {
    return (
        <div className="newdestination">
            <img
                className="newdestination__img"
                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
            />
            <form className="newdestination__form">
                <div className="newdestination__form__content">
                    <label htmlFor="fileInput">
                        <img src={uploadIcon} alt="upload icon" className="newdestination__form__uploadicon" />
                    </label>
                    <input id="fileInput" type="file" style={{ display: "none" }} />
                    <input
                        className="newdestination__form__input"
                        placeholder="New Destination Name"
                        type="text"
                        autoFocus={true}
                    />
                </div>
                <div className="newdestination__form__content">
                    <textarea
                        className="newdestination__form__input newdestination__form__text"
                        placeholder="Describe your travel..."
                        type="text"
                        autoFocus={true}
                    />
                </div>
                <button className="newdestination__form__submit" type="submit">
                    Publish
                </button>
            </form>
        </div>
    );
}

export default NewDestination;

