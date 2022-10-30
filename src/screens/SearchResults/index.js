import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchResultsComponent } from "../../components/SearchResults";
import { setIsUpdate } from "../../features/taskSlice";
import { StorageService } from "../../services/storage.service";

export const SearchResults = () => {
  const searchQuery = useSelector((state) => state.tasks.searchQuery);
  const isUpdate = useSelector((state) => state.tasks.isUpdate);
  const [filteredData, setFilteredData] = useState();
  const [localData, setLocalData] = useState([]);
  const [filteredDataLength, setFilteredDataLength] = useState();
  const dispatch = useDispatch();

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
    let localData = StorageService.getSomething("taskList");
    let filteredLocalData = localData.filter((item) =>
      item.text.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setLocalData(localData);
    setFilteredData(filteredLocalData);
    setFilteredDataLength(filteredLocalData.length);
  }, [searchQuery, isUpdate]);

  return (
    <>
      <SearchResultsComponent
        filteredData={filteredData}
        handleImportant={handleImportant}
        handleComplete={handleComplete}
        filteredDataLength={filteredDataLength}
        searchQuery={searchQuery}
      />
    </>
  );
};
