import React from "react";
import { CiUser } from "react-icons/ci";
import { SlOptions } from "react-icons/sl";

export const AssignedToMeComponent = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomePageHeader">
          <div className="HomePageHeaderLeft">
            <div
              style={{
                marginTop: "3px",
                marginRight: "10px",
                color: "#5CA52D",
              }}
            >
              <CiUser />
            </div>
            <div style={{ color: "#5CA52D" }}>Assigned to me</div>
            <div
              style={{
                fontSize: "10px",
                marginTop: "10px",
                marginLeft: "10px",
                color: "#5CA52D",
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
