import React from "react";
import { AiFillStar } from "react-icons/ai";
import { CiStar } from "react-icons/ci";

import "./style.css";
export const SearchResultsComponent = (props) => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomePageItems">
          {props.filteredDataLength < 1 ? (
            <div style={{ fontSize: "18px" }}>
              Sorry we couldn't find "
              <span
                style={{
                  color: "#89b1f7",
                }}
              >
                {props.searchQuery}
              </span>
              "
            </div>
          ) : (
            <>
              {props.filteredData?.map((item) => {
                return (
                  <div className="HomePageItem" key={item.id}>
                    <div
                      className="HomePageItemComplete"
                      style={{
                        backgroundColor: item.completed ? "#89b1f7" : "",
                      }}
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
                      {item.important ? (
                        <CiStar className="HomePageStarIcon" />
                      ) : (
                        <AiFillStar className="HomePageStarIcon" />
                      )}
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
