import React from "react";
import { AiFillStar } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import { SlOptions } from "react-icons/sl";
import { AddTask } from "../Shared/AddTask";

export const ImportantComponent = (props) => {
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
              <CiStar />
            </div>
            <div style={{ color: "#2564CF" }}>Important</div>
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
        <div style={{ marginTop: "20px" }}></div>
        <AddTask important={true} />
        <div className="HomePageItems">
          {props.filteredData.map((item) => {
            return (
              <div className="HomePageItem" key={item.id}>
                <div
                  className="HomePageItemComplete"
                  style={{ backgroundColor: item.completed ? "#89b1f7" : "" }}
                  onClick={() => props.handleComplete(item)}
                ></div>
                <div className="HomePageItemText">{item.text}</div>
                <div
                  style={{
                    fontSize: "20px",
                    color: "#2564cf",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    props.handleImportant(item);
                  }}
                >
                  <AiFillStar className="HomePageStarIcon" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
