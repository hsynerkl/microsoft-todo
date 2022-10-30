import React, { useEffect, useState } from "react";
import { BsCalendar4Week } from "react-icons/bs";
import { GrNotification } from "react-icons/gr";
import { CiRepeat } from "react-icons/ci";
import "./style.css";
import { StorageService } from "../../../services/storage.service";
import { useDispatch, useSelector } from "react-redux";
import { setIsUpdate } from "../../../features/taskSlice";

export const AddTask = (props) => {
  const [text, setText] = useState("");
  const [localData, setLocalData] = useState([]);
  const dispatch = useDispatch();
  const isUpdate = useSelector((state) => state.tasks.isUpdate);

  const handleSave = () => {
    if (text != "") {
      if (props.important) {
        localData.push({
          id: +new Date(),
          text: text,
          important: true,
          completed: false,
        });
      } else {
        localData.push({
          id: +new Date(),
          text: text,
          important: false,
          completed: false,
        });
      }
      StorageService.setSomething("taskList", localData);
      setText("");
      dispatch(setIsUpdate(isUpdate + 1));
    }
  };
  useEffect(() => {
    let data = StorageService.getSomething("taskList");
    setLocalData(data);
  }, [isUpdate]);

  return (
    <div className="AddTaskContainer">
      <div className="AddTaskTop">
        <div className="AddTaskTopItem"></div>
        <div className="AddTaskInput">
          <input
            type="text"
            placeholder="Add a task"
            value={text}
            onKeyDown={(event) => {
              event.code == "Enter" && handleSave();
            }}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="AddTaskBottom">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="AddTaskBottomIcons">
            <div>
              <BsCalendar4Week />
            </div>
            <div>
              <GrNotification />
            </div>
            <div>
              <CiRepeat />
            </div>
          </div>
          <div
            style={{
              marginRight: "10px",
              color: "#a19f9d",
              width: "25px",
              height: "25px",
              background: "#fff",
              fontSize: "10px",
              border: "1px solid whitesmoke",
              padding: "2px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "4px",
              borderRadius: "5px",
              cursor: text === "" ? "not-allowed" : "pointer",
              boxShadow: "rgba(149, 157, 165, 0.2) 0  px 8px 24px",
            }}
            onClick={handleSave}
          >
            Add
          </div>
        </div>
      </div>
    </div>
  );
};
