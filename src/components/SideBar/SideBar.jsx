// import { Link } from "react-router-dom";
import "./SideBar.scss";
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';

function SideBar() {
    return (
        <aside className="sidebar">
             <section className="sidebar__item">
                <span className="sidebar__title">about me</span>
                <img
                    className="sidebar__item__img"
                    src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
                    alt=""
                />
                <p className="sidebar__item__p">
                    Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
                    amet ex esse.Sunt eu ut nostrud id quis proident.
                </p>
            </section>
            <section className="sidebar__item">
                <span className="sidebar__title">categories</span>
                <ul className="sidebar__list">
                    <li className="sidebar__list__item">
                        {/* <Link className="link" to="/destinations?cat=Canada"> */}
                            Canada
                        {/* </Link> */}
                    </li>
                    <li className="sidebar__list__item">
                        {/* <Link className="link" to="/destinations?cat=States"> */}
                            United States
                        {/* </Link> */}
                    </li>
                    <li className="sidebar__list__item">
                        {/* <Link className="link" to="/destinations?cat=Mexico"> */}
                            Mexico
                        {/* </Link> */}
                    </li>
                    <li className="sidebar__list__item">
                        {/* <Link className="link" to="/destinations?cat=Korea"> */}
                            Korea
                        {/* </Link> */}
                    </li>
                    <li className="sidebar__list__item">
                        {/* <Link className="link" to="/destinations?cat=Palestine"> */}
                            Palestine
                        {/* </Link> */}
                    </li>
                    <li className="sidebar__list__item">
                        {/* <Link className="link" to="/destinations?cat=UAE"> */}
                            UAE
                        {/* </Link> */}
                    </li>
                </ul>
            </section>
            <section className="sidebar__item">
                <span className="sidebar__title">follow us</span>
                <div className="sidebar__social">
                    <FaFacebookSquare className="sidebar__icon"/>
                    <FaTwitterSquare  className="sidebar__icon"/> 
                    <FaInstagramSquare  className="sidebar__icon"/>
                </div>
            </section> 
        </aside>
    );
}

export default SideBar;