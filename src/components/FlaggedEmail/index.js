import React from "react";
import { HiOutlineFlag } from "react-icons/hi";
import { SlOptions } from "react-icons/sl";

export const FlaggedEmailComponent = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomePageHeader">
          <div className="HomePageHeaderLeft">
            <div
              style={{
                marginTop: "3px",
                marginRight: "10px",
                color: "#d2534e",
              }}
            >
              <HiOutlineFlag />
            </div>
            <div style={{ color: "#d2534e" }}>Flagged email </div>
            <div
              style={{
                fontSize: "10px",
                marginTop: "10px",
                marginLeft: "10px",
                color: "#d2534e",
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
