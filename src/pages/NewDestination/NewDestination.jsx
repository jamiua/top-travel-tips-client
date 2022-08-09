import { useContext, useState } from "react";
import axios from "axios";
import './NewDestination.scss';
import { Context } from "../../context/Context";
import uploadIcon from "../../assets/icons/upload.svg";

function NewDestination() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const {user} = useContext(Context);

    const handleTipSubmit = async (event) => {
        event.preventDefault();
        const newDestination = {
            username: user.username,
            title,
            desc,
        };
        if (file) {
            const data = new FormData();
            // Ensuring upload file names are unique by appending current date
            const filename = Date.now() + file.originalname;
            data.append("name", filename);
            data.append("file", file);
            newDestination.photo = filename;
            console.log(newDestination);
            try {
                await axios.post("/upload", data);
            } catch (err) {}
        }
        try {
            const response = await axios.post("/destinations", newDestination);
            window.location.replace("/destination/" + response.data._id);
        } catch (err) {}
    };

    return (
        <div className="newdestination">
            {/* If file upload is present create link to file, if not use default */}
            {file ? (<img
                className="newdestination__img"
                src={URL.createObjectURL(file)}
                alt=""
            />
            ) : (<img
                className="newdestination__img"
                src="https://images.unsplash.com/photo-1611785807344-3f82f21e5343?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                alt=""/>
            )}
            <form className="newdestination__form" onSubmit={handleTipSubmit}>
                <div className="newdestination__form__content">
                    <label htmlFor="fileInput">
                        <img src={uploadIcon} alt="upload icon" className="newdestination__form__uploadicon" />
                    </label>
                    <input 
                        id="fileInput" 
                        type="file" 
                        style={{ display: "none" }}
                        onChange={event => setFile(event.target.files[0])}
                    />
                    <input
                        className="newdestination__form__input"
                        placeholder="Top Travel Tip Title"
                        type="text"
                        autoFocus={true}
                        onChange={event => setTitle(event.target.value)}
                    />
                </div>
                <div className="newdestination__form__content">
                    <textarea
                        className="newdestination__form__input newdestination__form__text"
                        placeholder="Describe your top travel tip..."
                        type="text"
                        autoFocus={true}
                        onChange={event => setDesc(event.target.value)}
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

