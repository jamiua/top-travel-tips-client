// import { Link } from "react-router-dom";
import "./SideBar.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
import bloggerImg from '../../assets/images/blogger.jpg';

function SideBar() {
    const [allCategories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
          const response = await axios.get("/categories");
          setCategories(response.data);
        };
        getCategories();
    }, []);

    return (
        <aside className="sidebar">
             <section className="sidebar__item">
                <span className="sidebar__title">about me</span>
                <img
                    className="sidebar__item__img"
                    src={bloggerImg}
                    alt="Blogger Table"
                />
                <p className="sidebar__item__p">
                    Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
                    amet ex esse.Sunt eu ut nostrud id quis proident.
                </p>
            </section>
            <section className="sidebar__item">
                <span className="sidebar__title">countries</span>
                <ul className="sidebar__list">
                    {/* <Link className="link" to="/destinations?cat=Canada"> */}
                        {allCategories.map((category) => (
                            <li key={category._id} className="sidebar__list__item">
                                {/* <Link className="link" to="/destinations?cat=States"> */}
                                    {category.categname}
                                {/* </Link> */}
                            </li>
                        ))}
                    {/* </Link> */}
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