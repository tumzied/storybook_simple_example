import { PureTaskList } from "./TaskList";
import { taskList } from "../../features/task/taskSlice";
export default {
  component: PureTaskList,
  title: "TaskComponent/PureTaskList",
};

const Template = (args) => <PureTaskList {...args} />;
export const Default = Template.bind({});

Default.args = {
  tasks: [...taskList],
};

export const Pinned = Template.bind({});

Pinned.args = {
  tasks: [
    { id: 1, title: "Do code", state: "TASK_PINNED" },
    { id: 2223, title: "Do Work", state: "TASK_PINNED" },
    [...taskList].splice(3),
    { id: 34, title: "Do code", state: "TASK_PINNED" },
    { id: 43, title: "Do code", state: "TASK_PINNED" },
  ],
};

export const Loading = Template.bind({});

Loading.args = {
  tasks: [...taskList],
  isLoading: true,
};

export const Empty = Template.bind({});

Empty.args = {};
