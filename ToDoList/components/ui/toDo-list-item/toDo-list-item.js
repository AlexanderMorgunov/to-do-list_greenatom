import { createElement } from "../../../model/createElement.js";
import { UiButton } from "../../uikit/ui-button/uiButton.js";

export function ToDoListItem({
  task,
  index,
  onDelete,
  onMarkTaskComplete,
  isMarkTask,
}) {
  const { title, id } = task;

  return createElement(
    "div",
    {
      className: clsx(
        "to-do-list-item_wrapper",
        isMarkTask && index % 2 === 0 && "to-do-list-item_wrapper_evenTask",
        isMarkTask && index % 2 !== 0 && "to-do-list-item_wrapper_oddTask "
      ),
    },
    createElement("div", {
      className:
        task.status === "complete"
          ? "to-do-list-item_title_complete"
          : "to-do-list-item_title",
      textContent: title,
    }),
    createElement(
      "div",
      {
        className: "to-do-list-item_btn_group",
      },
      UiButton({
        children: "Complete",
        size: "md",
        variant: "primary",
        onclick: () => onMarkTaskComplete(id),
      }),
      UiButton({
        children: "Delete",
        size: "md",
        variant: "primary",
        onclick: () => {
          onDelete(id);
        },
      })
    )
  );
}
