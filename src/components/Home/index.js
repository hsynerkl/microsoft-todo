import { CiStar } from "react-icons/ci";
import { SlOptions } from "react-icons/sl";
import { WiDaySunny } from "react-icons/wi";
import { AddTask } from "../Shared/AddTask";

import "./style.css";
export const HomeScreenComponent = (props) => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomePageHeader">
          <div className="HomePageHeaderLeft">
            <div style={{ marginTop: "3px", marginRight: "10px" }}>
              <WiDaySunny />
            </div>
            <div>My Day</div>
            <div
              style={{
                fontSize: "10px",
                marginTop: "10px",
                marginLeft: "10px",
              }}
            >
              <SlOptions />
            </div>
          </div>
        </div>
        <div style={{ marginTop: "20px" }}></div>
        <AddTask />
        <div className="HomePageItems">
          {props.filteredData.map((item) => {
            return (
              <div className="HomePageItem" key={item.id}>
                <div
                  className="HomePageItemComplete"
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
                    props.handleImportantAdd(item);
                  }}
                >
                  <CiStar className="HomePageStarIcon" />
                </div>
              </div>
            );
          })}

          {props.completedData.length > 0 && (
            <>
              <div
                onClick={() => {
                  props.setShowCompleted((x) => !x);
                }}
                style={{
                  fontSize: "14px",
                  marginTop: "10px",
                  padding: "4px",
                  cursor: "pointer",
                }}
              >
                Completed {props.completedData.length}{" "}
              </div>
              <hr />
              {props.showCompleted && (
                <>
                  {props.completedData.map((item) => {
                    return (
                      <div className="HomePageItem" key={item.id}>
                        <div
                          className="HomePageItemComplete"
                          onClick={() => props.handleComplete(item)}
                          style={{ backgroundColor: "#89b1f7" }}
                        ></div>
                        <div className="HomePageItemText">{item.text}</div>
                        <div
                          style={{
                            fontSize: "20px",
                            color: "#2564cf",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            props.handleImportantAdd(item);
                          }}
                        >
                          <CiStar className="HomePageStarIcon" />
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
