import { createElement } from "../../../model/createElement.js";

export function ToDoListLayout({ header, children }) {
  return createElement(
    "div",
    {
      className: "to-do-list_layout",
    },
    createElement(
      "div",
      {
        className: "to-do-list_header",
      },
      header
    ),
    createElement(
      "div",
      {
        className: "to-do-list_body",
      },
      children
    )
  );
}
