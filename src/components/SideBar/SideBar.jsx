import "./SideBar.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
import bloggerImg from '../../assets/images/blogger.jpg';

function SideBar() {
    // Initial state for categories is set to empty array
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
                <span className="sidebar__title">explore now</span>
                <img
                    className="sidebar__item__img"
                    src={bloggerImg}
                    alt="Blogger Table"
                />
                <p className="sidebar__item__p">
                    The countries below are open for exploration. Select where you would like to see travel tips from.
                </p>
            </section>
            <section className="sidebar__item">
                <span className="sidebar__title">countries</span>
                <ul className="sidebar__list">
                    {allCategories.map((oneCategory) => (
                        <Link to={`/destinations/?category=${oneCategory.categname}`} className="link" >
                            <li key={oneCategory._id} className="sidebar__list__item">{oneCategory.categname}</li>
                        </Link>
                    ))}
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