import React from "react";
import "./style.css";
import { CgMenuGridO } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { AiOutlineQuestion } from "react-icons/ai";
import { VscMegaphone } from "react-icons/vsc";
import { SearchBar } from "../../components/Shared/SearchBar";
export const Navbar = () => {
  return (
    <>
      <div className="Navbar-container">
        <div className="NavbarLeft">
          <div className="NavbarHover NavbarIcon">
            <CgMenuGridO />
          </div>
          <div className="AppNameContainer">
            <p className="AppName-text">To Do</p>
          </div>
        </div>
        <div>
          <SearchBar />
        </div>
        <div className="NavbarRight">
          <div>
            <ul className="Navbar-IconList">
              <li className="NavbarHover">
                <CiSettings />
              </li>
              <li className="NavbarHover">
                <AiOutlineQuestion />
              </li>
              <li className="NavbarHover">
                <VscMegaphone />
              </li>
            </ul>
          </div>
          <div className="NavbarProfileContainer">
            <div className="NavbarProfile ">HE</div>
          </div>
        </div>
      </div>
    </>
  );
};
