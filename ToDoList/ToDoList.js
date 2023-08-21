import { createElement } from "./model/createElement.js";

export function ToDoList(children) {
  return createElement(
    "div",
    {
      className: "to-do-list",
    },
    ...children
  );
}
