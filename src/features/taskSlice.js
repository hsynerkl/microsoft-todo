import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    Tasks: [],
    isUpdate: 0,
    searchQuery: "",
  },
  reducers: {
    updateTasks: (state, { payload }) => {
      state.Tasks = payload;
    },
    setIsUpdate: (state, { payload }) => {
      state.isUpdate = payload;
    },
    setSearchQuery: (state, { payload }) => {
      state.searchQuery = payload;
    },
  },
});

export default tasksSlice.reducer;
export const { updateTasks, setIsUpdate, setSearchQuery } = tasksSlice.actions;
