import React, { useState } from "react";
import "./style.css";
import { VscSearch } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../../features/taskSlice";

export const SearchBar = () => {
  const [queryValue, setQueryValue] = useState("");
  const dispatch = useDispatch();

  const queryClear = () => {
    setQueryValue("");
    dispatch(setSearchQuery(""));
  };

  return (
    <div className="SearchBar">
      <div className="SearchBar-SearchIcon">
        <VscSearch />
      </div>
      <input
        value={queryValue}
        type="text"
        className="SearchBar-Input"
        placeholder="Search"
        onChange={(e) => {
          setQueryValue(e.target.value);
          dispatch(setSearchQuery(e.target.value));
        }}
      />
      <div
        className="SearchBar-SearchIcon SearchBarDeleteIcon"
        onClick={queryClear}
      >
        x
      </div>
    </div>
  );
};
