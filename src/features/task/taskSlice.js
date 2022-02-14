/* A simple redux store/actions/reducer implementation.
 * A true app would be more complex and separated into different files.
 */
import { configureStore, createSlice } from "@reduxjs/toolkit";

/*
 * The initial state of our store when the app loads.
 * Usually, you would fetch this from a server.
 */
export const taskList = [
  { id: 1, title: "Do code", state: "TASK_INBOX" },
  { id: 2, title: "Do Work", state: "TASK_INBOX" },
  { id: 3, title: "solve problem", state: "TASK_INBOX" },
  { id: 4, title: "eat", state: "TASK_INBOX" },
  { id: 5, title: "workout", state: "TASK_INBOX" },
];
/*
 * The store is created here.
 * You can read more about Redux Toolkit's slices in the docs:
 * https://redux-toolkit.js.org/api/createSlice
 */
const TasksSlice = createSlice({
  name: "tasks",
  initialState: taskList,
  reducers: {
    updateTaskState: (state, action) => {
      const { id, newTaskState } = action.payload;
      const task = state.findIndex((task) => task.id === id);
      if (task >= 0) {
        state[task].state = newTaskState;
      }
    },
  },
});
// The actions contained in the slice are exported for usage in our components
export const { updateTaskState } = TasksSlice.actions;

export default TasksSlice;
