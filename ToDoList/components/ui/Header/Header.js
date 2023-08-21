import { createElement } from "../../../model/createElement.js";
import { UiButton } from "../../uikit/ui-button/uiButton.js";

export function Header({ onAddTask, onMarkEvenTask, onMarkOddTask }) {
  return createElement(
    "div",
    {
      className: "to-do_header",
    },
    createElement("div", {
      className: "to-do_header_title",
      textContent: "To Do List",
    }),
    toDoInput(onAddTask),
    headerBTNGroup(onMarkEvenTask, onMarkOddTask)
  );
}

function toDoInput(onAddTask) {
  return createElement(
    "form",
    {
      className: "to-do_header_form",
      onsubmit: (e) => {
        e.preventDefault();
        onAddTask(e.target[0].value);
      },
    },
    createElement("input", {
      placeholder: "Введите заголовок...",
      className: "to-do_input",
      type: "text",
      name: "title",
      className: "to-do_input",
      required: "required",
      minlength: 2,
      value: "",
    }),
    UiButton({
      type: "submit",
      size: "lg",
      variant: "outline",
      children: "Добавить задачу",
      className: "to-do_header_form_submit",
    })
  );
}

function headerBTNGroup(onMarkEvenTask, onMarkOddTask) {
  return createElement(
    "div",
    {
      className: "to-do_header_btn_group",
    },
    UiButton({
      children: "Выделить четные задачи",
      onclick: () => onMarkEvenTask(),
      size: "lg",
      variant: "outline",
    }),
    UiButton({
      children: "Выделить нечетные задачи",
      onclick: () => onMarkOddTask(),
      size: "lg",
      variant: "outline",
    })
  );
}
