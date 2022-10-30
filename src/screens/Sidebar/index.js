import React, { useEffect, useLayoutEffect, useState } from "react";
import "./style.css";
import { VscMenu } from "react-icons/vsc";
import { WiDaySunny } from "react-icons/wi";
import { CiStar } from "react-icons/ci";
import { BsCalendar4Week } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { HiOutlineFlag } from "react-icons/hi";
import { TiHomeOutline } from "react-icons/ti";
import { TbNote } from "react-icons/tb";
import { GrAdd } from "react-icons/gr";
import { VscMail } from "react-icons/vsc";
import { TbUsers } from "react-icons/tb";
import { GiPaperClip } from "react-icons/gi";
import { TiTickOutline } from "react-icons/ti";
import { useNavigate, useLocation } from "react-router-dom";
import { StorageService } from "../../services/storage.service";
import { useSelector } from "react-redux";

export const Sidebar = (props) => {
  const isUpdate = useSelector((state) => state.tasks.isUpdate);
  const location = useLocation();
  const navigate = useNavigate();
  const [importantData, setImportantData] = useState();

  useEffect(() => {
    let data = StorageService.getSomething("taskList");
    let filteredData = data?.filter((a) => a.important == true);
    setImportantData(filteredData?.length);
  }, [isUpdate]);
  return (
    <>
      {props.sidebarShow ? (
        <div className="HamburgerMenuOn">
          <div
            className="HamburgerMenuBtn"
            onClick={() => {
              props.setSideBarShow(!props.sidebarShow);
            }}
          >
            <VscMenu />
          </div>
          <div className="SidebarItemContainer">
            <div
              className={
                location.pathname == "/home"
                  ? "SidebarItem ActiveTab"
                  : "SidebarItem"
              }
              onClick={() => {
                navigate("/home");
              }}
            >
              <div className="SidebarItemContent">
                <div className="SidebarItemIcon">
                  <WiDaySunny />
                </div>
                <div className="SidebarItemText">My Day</div>
              </div>
            </div>
            <div
              className={
                location.pathname == "/important"
                  ? "SidebarItem ActiveTab"
                  : "SidebarItem"
              }
              onClick={() => {
                navigate("/important");
              }}
            >
              <div className="SidebarItemContent">
                <div className="SidebarItemIcon">
                  <CiStar />
                </div>
                <div className="SidebarItemText">Important</div>
                <div style={{ marginLeft: "130px", fontSize: "14px" }}>
                  {importantData}
                </div>
              </div>
            </div>
            <div
              className={
                location.pathname == "/planned"
                  ? "SidebarItem ActiveTab"
                  : "SidebarItem"
              }
              onClick={() => {
                navigate("/planned");
              }}
            >
              <div className="SidebarItemContent">
                <div className="SidebarItemIcon IconDesign">
                  <BsCalendar4Week />
                </div>
                <div className="SidebarItemText">Planned</div>
              </div>
            </div>
            <div
              className={
                location.pathname == "/assignedtome"
                  ? "SidebarItem ActiveTab"
                  : "SidebarItem"
              }
              onClick={() => {
                navigate("/assignedtome");
              }}
            >
              <div className="SidebarItemContent">
                <div className="SidebarItemIcon IconDesign">
                  <CiUser />
                </div>
                <div className="SidebarItemText">Assigned to me</div>
              </div>
            </div>
            <div
              className={
                location.pathname == "/flaggedemail"
                  ? "SidebarItem ActiveTab"
                  : "SidebarItem"
              }
              onClick={() => {
                navigate("/flaggedemail");
              }}
            >
              <div className="SidebarItemContent">
                <div className="SidebarItemIcon IconDesign">
                  <HiOutlineFlag />
                </div>
                <div className="SidebarItemText">Flagged email</div>
              </div>
            </div>
            <div
              className={
                location.pathname == "/tasks"
                  ? "SidebarItem ActiveTab"
                  : "SidebarItem"
              }
              onClick={() => {
                navigate("/tasks");
              }}
            >
              <div className="SidebarItemContent">
                <div className="SidebarItemIcon IconDesign">
                  <TiHomeOutline />
                </div>
                <div className="SidebarItemText">Tasks</div>
              </div>
            </div>
          </div>
          <div
            style={{
              borderBottom: "1px solid #e1dfdd",
              width: "90%",
              marginLeft: "10px",
            }}
          ></div>
          <div className="SidebarItem " style={{ marginTop: "10px" }}>
            <div className="SidebarItemContent" style={{ width: "100%" }}>
              <div
                className="SidebarItemIcon IconDesign"
                style={{ color: "#548deb" }}
              >
                <GrAdd />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div className="SidebarItemText" style={{ marginTop: "3px" }}>
                  <input
                    type="text"
                    placeholder="New List"
                    className="NewListInput"
                  />
                </div>
                <div
                  style={{
                    color: "#548deb",
                    marginRight: "15px",
                    fontSize: "20px",
                  }}
                >
                  <div style={{ marginTop: "1px" }}>
                    <TbNote />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="SidebarBottomContainer" style={{ fontSize: "16px" }}>
            <div className="SidebarBottom">
              <div className="SidebarBottomItem" style={{ fontSize: "16px" }}>
                <VscMail />
              </div>
              <div className="SidebarBottomItem" style={{ fontSize: "12px" }}>
                <BsCalendar4Week />
              </div>
              <div className="SidebarBottomItem" style={{ fontSize: "16px" }}>
                <TbUsers />
              </div>
              <div className="SidebarBottomItem" style={{ fontSize: "16px" }}>
                <GiPaperClip />
              </div>
              <div
                className="SidebarBottomItem"
                style={{ fontSize: "16px", color: "#548deb" }}
              >
                <TiTickOutline />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="HamburgerMenuOff"
          onClick={() => {
            props.setSideBarShow(!props.sidebarShow);
          }}
        >
          <div>
            <VscMenu />
          </div>
        </div>
      )}
    </>
  );
};
