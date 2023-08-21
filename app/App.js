import { ToDoList } from "../ToDoList/ToDoList.js";
import { createElement } from "../ToDoList/model/createElement.js";
import { ToDoListItem } from "../ToDoList/components/ui/toDo-list-item/toDo-list-item.js";
import { ToDoListLayout } from "../ToDoList/components/ui/ToDoListLayout/ToDoListLayout.js";
import { Header } from "../ToDoList/components/ui/Header/Header.js";
import { sortByStatus } from "../ToDoList/model/sortListByStatus.js";

export function App({ store }) {
  const list = store.getState().list;

  const isMarkTask = (index) => {
    if (++index % 2 === 0) {
      return store.state.markEvenTask;
    } else {
      return store.state.markOddTask;
    }
  };

  return createElement(
    "div",
    {
      className: "App",
    },
    ToDoListLayout({
      header: Header({
        onAddTask: (title) => store.onAddTask(title),
        onMarkEvenTask: () => store.onMarkEvenTask(),
        onMarkOddTask: () => store.onMarkOddTask(),
        onDeleteFirstTask: () => store.onDeleteFirstTask(),
        onDeleteLastTask: () => store.onDeleteLastTask(),
      }),
      children:
        list.length > 0
          ? ToDoList(
              sortByStatus(list).map((task, index) => {
                return ToDoListItem({
                  task,
                  onDelete: (id) => store.onDelete(id),
                  onMarkTaskComplete: (id) => store.onMarkTaskComplete(id),
                  index,
                  isMarkTask: isMarkTask(index),
                });
              })
            )
          : createElement("div", {
              className: "to-do-list_empty",
              textContent: "Список задач пуст",
            }),
    })
  );
}
