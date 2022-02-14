import PropTypes from "prop-types";
import React from "react";
import "./task.css";

export default function Task({
  task: { id, title },
  state,
  onArchiveTask,
  onPinTask,
}) {
  return (
    <div className="list-item">
      <label className="checkbox" onClick={() => onArchiveTask(id)}>
        <input
          type="checkbox"
          defaultChecked={state === "TASK_ARCHIVED"}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-click-space" />
      </label>
      <div className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          placeholder="Input title"
        />
      </div>

      <div
        className="actions"
        data-state={state}
        onClick={(event) => event.stopPropagation()}
      >
        {state != "TASK_ARCHIVED" && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => onPinTask(id)}>
            <span
              className={`icon-star`}
              id={`pinTask-${id}`}
              aria-label={`pinTask-${id}`}
            >
              {state != "TASK_PINNED" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-archive"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-archive-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z" />
                </svg>
              )}
            </span>
          </a>
        )}
      </div>
    </div>
  );
}

Task.prototype = {
  task: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }),
  state: PropTypes.oneOf(["TASK_INBOX", "TASK_PINNED", "TASK_ARCHIVED"]),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func,
};

Task.defaultProps = {
  task: {
    id: 1,
    title: "My task",
  },
  state: "TASK_INBOX",
  onArchiveTask: (id) => {},
  onPinTask: (id) => {},
};
