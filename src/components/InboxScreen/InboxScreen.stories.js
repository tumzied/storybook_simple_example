import { createSlice, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import React from "react";
import { fireEvent, within } from "@storybook/testing-library";
import { PureInboxScreen } from "./InboxScreen";
import { taskList } from "../../features/task/taskSlice";

const MokeStore = configureStore({
  reducer: {
    tasks: createSlice({
      name: "tasks",
      initialState: [...taskList],
      reducers: {
        updateTaskState: (state, action) => {
          const { id, newTaskState } = action.payload;
          const task = state.findIndex((task) => task.id === id);
          if (task >= 0) {
            state[task].state = newTaskState;
          }
        },
      },
    }).reducer,
  },
});
export default {
  component: PureInboxScreen,
  decorators: [(story) => <Provider store={MokeStore}>{story()}</Provider>],
  title: "TaskBox/PureInboxScreen",
};
const Template = (args) => <PureInboxScreen {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: "Something",
};

export const WithInteraction = Template.bind({});
WithInteraction.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // Simulates pinning the first task
  await fireEvent.click(canvas.getByLabelText("pinTask-4"));
  // Simulates pinning the third task
  await fireEvent.click(canvas.getByLabelText("pinTask-3"));
};
