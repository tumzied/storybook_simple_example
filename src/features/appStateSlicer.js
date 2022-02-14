import { createSlice } from "@reduxjs/toolkit";

const AppStateSlicer = createSlice({
  name: "appState",
  initialState: "",
  reducers: {
    updateAppState: (state, action) => {
      return {
        ...state,
        isError: action.payload,
      };
    },
  },
});
export const { updateAppState } = AppStateSlicer.actions;

export default AppStateSlicer;
