import './Profile.scss';
import SideBar from '../../components/SideBar/SideBar';
import UserIcon from '../../assets/icons/user.svg';

function Profile() {
    return (
        <div className="profile">
            <div className="profile__container">
                <div className="profile__title">
                    <span className="profile__title__update">Update Your Account</span>
                    <span className="profile__title__delete">Delete Account</span>
                </div>
                <form className="profile__form">
                    <label>Profile Picture</label>
                    <div className="profile__form__picture">
                        <img
                        src="https://images.unsplash.com/photo-1522673999312-93aa76caeda6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
                        alt=""
                        />
                        <label htmlFor="fileInput">
                            <img src={UserIcon} alt="" className="profile__form__icon"/>{" "}
                        </label>
                        <input
                        id="fileInput"
                        type="file"
                        style={{ display: "none" }}
                        className="profile__form__input"
                        />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Test" name="name" />
                    <label>Email</label>
                    <input type="email" placeholder="test@gmail.com" name="email" />
                    <label>Password</label>
                    <input type="password" placeholder="Password" name="password" />
                    <button className="profile__form__submit" type="submit">
                        Update
                    </button>
                </form>
            </div>
            <SideBar />
        </div>
    );
}

export default Profile;