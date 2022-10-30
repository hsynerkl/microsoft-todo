import React from "react";
import { BsCalendar4Week } from "react-icons/bs";
import { SlOptions } from "react-icons/sl";

export const PlannedComponent = () => {
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
              <BsCalendar4Week />
            </div>
            <div style={{ color: "#2564CF" }}>Planned</div>
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
