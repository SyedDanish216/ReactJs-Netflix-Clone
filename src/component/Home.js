import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="containers">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <span>
            <NavLink className="navlink" to="/homepage">
              HomePage
            </NavLink>
          </span>
          <span>
            <NavLink className="navlink" to="/series">
              Series
            </NavLink>
          </span>
          <span>
            <NavLink className="navlink" to="/movies">
              Movies
            </NavLink>
          </span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <i className="fas fa-search"></i>
          <span>Kid</span>
          <i className="far fa-bell"></i>
          <img
            src="https://th.bing.com/th/id/OIP.otpjr12akKqrhy2cCd7fQgHaLu?w=182&h=289&c=7&r=0&o=5&pid=1.7"
            alt=""
          />
          <div className="profile">
            <i className="fas fa-arrow-down"></i>
            <div className="options">
              <span>Settings</span>
              <span>
                <NavLink className="navlink" to="/login">
                  Logout
                </NavLink>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Home;
