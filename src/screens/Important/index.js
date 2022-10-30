import { ImportantComponent } from "../../components/Important";
import { useDispatch, useSelector } from "react-redux";
import { setIsUpdate } from "../../features/taskSlice";
import { StorageService } from "../../services/storage.service";
import React, { useEffect, useState } from "react";

export const Important = () => {
  const isUpdate = useSelector((state) => state.tasks.isUpdate);
  const dispatch = useDispatch();
  const [localData, setLocalData] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const isUpdateFnc = () => {
    StorageService.setSomething("taskList", localData);
    dispatch(setIsUpdate(isUpdate + 1));
  };

  const handleComplete = (item) => {
    let FilterItem = localData.filter((a) => a.id == item.id);
    FilterItem[0].completed = !FilterItem[0].completed;
    isUpdateFnc();
  };

  const handleImportant = (item) => {
    let FilterItem = localData.filter((a) => a.id == item.id);
    FilterItem[0].important = !FilterItem[0].important;
    isUpdateFnc();
  };

  useEffect(() => {
    let data = StorageService.getSomething("taskList");
    setLocalData(data);
    let filteredData = data.filter((item) => item.important == true);
    filteredData.reverse();
    setFilteredData(filteredData);
  }, [isUpdate]);

  return (
    <ImportantComponent
      showCompleted={showCompleted}
      filteredData={filteredData}
      handleComplete={handleComplete}
      handleImportant={handleImportant}
      setShowCompleted={setShowCompleted}
    />
  );
};
