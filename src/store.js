import TasksSlice from "./features/task/taskSlice";
import { configureStore } from "@reduxjs/toolkit";
import AppStateSlicer from "./features/appStateSlicer";

const store = configureStore({
  reducer: {
    tasks: TasksSlice.reducer,
    isError: AppStateSlicer.reducer,
  },
});

export default store;
