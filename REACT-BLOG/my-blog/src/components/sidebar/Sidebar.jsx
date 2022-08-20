import "./sidebar.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://burst.shopifycdn.com/photos/house-plant-in-white-pot.jpg?width=373&format=pjpg&exif=1&iptc=1"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <spa className="sidebarTitle">FOLLOW US</spa>
        <div className="sidebarSocial">
          <div>
            <a href="https://www.facebook.com/pucding3102/">
              <i className="sidebarIcon fa-brands fa-square-facebook"> </i>
            </a>
          </div>
          <div>
            <a href="https://twitter.com/pudding31_02">
              <i className="sidebarIcon fa-brands fa-square-twitter"> </i>
            </a>
          </div>
          <div>
            <a href="https://www.pinterest.com/phucdinhtrong1/">
              <i className="sidebarIcon fa-brands fa-square-pinterest"> </i>
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/pudding31.02/">
              <i className="sidebarIcon fa-brands fa-square-instagram"> </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
