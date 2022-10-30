import { HomeScreenComponent } from "../../components/Home";
import { useDispatch, useSelector } from "react-redux";
import { setIsUpdate } from "../../features/taskSlice";
import { StorageService } from "../../services/storage.service";
import React, { useEffect, useState } from "react";

export const HomeScreen = () => {
  const isUpdate = useSelector((state) => state.tasks.isUpdate);
  const dispatch = useDispatch();
  const [localData, setLocalData] = useState(
    StorageService.getSomething("taskList")
  );
  const [showCompleted, setShowCompleted] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [completedData, setCompletedData] = useState([]);

  const isUpdateFnc = () => {
    StorageService.setSomething("taskList", localData);
    dispatch(setIsUpdate(isUpdate + 1));
  };

  const handleComplete = (item) => {
    let FilterItem = localData.filter((a) => a.id == item.id);
    FilterItem[0].completed = !FilterItem[0].completed;
    isUpdateFnc();
  };

  const handleImportantAdd = (item) => {
    let FilterItem = localData.filter((a) => a.id == item.id);
    FilterItem[0].important = !FilterItem.important;
    isUpdateFnc();
  };

  useEffect(() => {
    let data = StorageService.getSomething("taskList");
    setLocalData(data);
    let filteredData = data.filter(
      (item) => item.important == false && item.completed == false
    );
    filteredData.reverse();
    setFilteredData(filteredData);
    let completedData = data.filter(
      (item) => item.completed == true && item.important == false
    );
    completedData.reverse();
    setCompletedData(completedData);
  }, [isUpdate]);

  return (
    <HomeScreenComponent
      showCompleted={showCompleted}
      filteredData={filteredData}
      completedData={completedData}
      handleComplete={handleComplete}
      handleImportantAdd={handleImportantAdd}
      setShowCompleted={setShowCompleted}
    />
  );
};
