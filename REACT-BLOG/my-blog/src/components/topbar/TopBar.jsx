import { Link } from "react-router-dom";
import "./topbar.css";
import React, { useContext } from "react";
import { Context } from "../../context/Context";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div div className="top">
      <div className="topLeft">
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
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to={"/"}>
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to={"/"}>
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to={"/"}>
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to={"/write"}>
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {" "}
            {user && "LOGOUT"}{" "}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to={"/login"}>
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to={"/register"}>
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
