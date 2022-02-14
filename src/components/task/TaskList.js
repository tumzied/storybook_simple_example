import React from "react";
import PropTypes from "prop-types";
import Task from "./Task";
import { useDispatch, useSelector } from "react-redux";
import store from "../../store";
import { updateTaskState } from "../../features/task/taskSlice";
function PureTaskList({ tasks, isLoading, onPinTask, onArchiveTask }) {
  const event = {
    onArchiveTask,
    onPinTask,
  };
  const LoadingItem = (
    <div className="loading-item">
      <span className="checkbox">m</span>
      <span className="loading-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
      <span className="actions">icon</span>
    </div>
  );
  if (isLoading) {
    return (
      <>
        <div className="list-items">
          {LoadingItem}
          {LoadingItem}
          {LoadingItem}
          {LoadingItem}
          {LoadingItem}
          {LoadingItem}
          {LoadingItem}
        </div>
      </>
    );
  }
  if (tasks.length == 0) {
    return (
      <>
        <div className="list-items">
          <div className="wrapper-message">
            <span className="icon-check">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                className="bi bi-check2-circle"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
              </svg>
            </span>
            <div className="title-message">You have no tasks</div>
            <div className="subtitle-message">Sit back and relax</div>
          </div>
        </div>
      </>
    );
  }
  const orderTask = [
    ...tasks.filter((task) => task.state == "TASK_PINNED"),
    ...tasks.filter((task) => task.state != "TASK_PINNED"),
  ];
  return (
    <div className="listItems">
      {orderTask.map((task, idx) => {
        return <Task key={idx} task={task} state={task.state} {...event} />;
      })}
    </div>
  );
}

PureTaskList.propTypes = {
  tasks: PropTypes.array,
  isLoading: PropTypes.bool,
  onPinTask: PropTypes.func,
  onArchiveTask: PropTypes.func,
};

PureTaskList.defaultProps = {
  tasks: [],
  isLoading: false,
  onPinTask: null,
  onArchiveTask: null,
};
export { PureTaskList };

export default function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const pinTask = (value) => {
    dispatch(updateTaskState({ id: value, newTaskState: "TASK_PINNED" }));
  };

  const archiveTask = (value) => {
    dispatch(updateTaskState({ id: value, newTaskState: "TASK_ARCHIVED" }));
  };
  const filteredTasks = tasks.filter(
    (t) => t.state === "TASK_INBOX" || t.state === "TASK_PINNED"
  );
  return (
    <PureTaskList
      tasks={filteredTasks}
      onPinTask={(task) => pinTask(task)}
      onArchiveTask={(task) => archiveTask(task)}
    />
  );
}
