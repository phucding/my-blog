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
          <ul>
            <li>Xin chào bạn đã đến với Blog của mình.</li>
            <li>
              Và mình là Pudding chúc bạn nụ cười luôn ở trên môi, và một cuộc
              sống hạnh phúc.
            </li>
          </ul>
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <img
          src="https://burst.shopifycdn.com/photos/bed-with-book-and-flowers.jpg?width=373&format=pjpg&exif=1&iptc=1"
          alt=""
        />
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
        <img
          //src="https://burst.shopifycdn.com/photos/woman-looks-out-train-window.jpg?width=373&format=pjpg&exif=1&iptc=1"
          src="https://burst.shopifycdn.com/photos/close-up-of-model-wearing-cream-sweater.jpg?width=373&format=pjpg&exif=1&iptc=1"
          alt=""
        />

        <div className="sidebarSocial">
          <div>
            <a href="https://www.facebook.com/pucding3102/" target={"_blank"}>
              <i className="sidebarIcon fa-brands fa-square-facebook"> </i>
            </a>
          </div>
          <div>
            <a href="https://twitter.com/pudding31_02" target={"_blank"}>
              <i className="sidebarIcon fa-brands fa-square-twitter"> </i>
            </a>
          </div>
          <div>
            <a
              href="https://www.pinterest.com/phucdinhtrong1/"
              target={"_blank"}
            >
              <i
                className="sidebarIcon fa-brands fa-square-pinterest"
                target={"_blank"}
              >
                {" "}
              </i>
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/pudding31.02/">
              <i
                className="sidebarIcon fa-brands fa-square-instagram"
                target={"_blank"}
              >
                {" "}
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
