import React from "react";
import { TiHomeOutline } from "react-icons/ti";
import { SlOptions } from "react-icons/sl";

export const TasksComponent = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomePageHeader">
          <div className="HomePageHeaderLeft">
            <div
              style={{
                marginTop: "3px",
                marginRight: "10px",
                color: "#2564CF",
              }}
            >
              <TiHomeOutline />
            </div>
            <div style={{ color: "#2564CF" }}>Tasks</div>
            <div
              style={{
                fontSize: "10px",
                marginTop: "10px",
                marginLeft: "10px",
                color: "#2564CF",
              }}
            >
              <SlOptions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
