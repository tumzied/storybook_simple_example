import { render, screen } from "@testing-library/react";

import { composeStories } from "@storybook/testing-react";

import * as TaskListStories from "./TaskList.stories";

const { Pinned } = composeStories(TaskListStories);

it("renders pinned tasks at the start of the list", () => {
  const { container } = render(<Pinned />);
  const val = container.querySelector(
    ".listItems:first-child .actions[data-state='TASK_PINNED']"
  );

  expect(val).not.toBe(null);
});
