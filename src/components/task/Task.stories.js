import React from "react";

import Task from "./Task";

export default {
  component: Task,
  title: "TaskComponent/Task",
  argTypes: {
    state: {
      name: "state",
      options: ["TASK_INBOX", "TASK_PINNED", "TASK_ARCHIVED"],
      control: { type: "select" },
      defaultValue: "TASK_INBOX",
      description: "string",
      type: { name: "string", required: true },
    },
    onArchiveTask: {
      control: "action",
    },
    onPinTask: {
      control: "action",
      type: { name: "function", required: true },
    },
  },
};

const Template = (args) => <Task {...args} />;

const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
  },
  state: "TASK_INBOX",
};

const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
  },
  state: "TASK_PINNED",
};

const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
  },
  state: "TASK_ARCHIVED",
};

export { Pinned, Archived, Default };
