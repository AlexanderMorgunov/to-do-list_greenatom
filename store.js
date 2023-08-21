import { getId } from "./ToDoList/model/getId.js";
import { STATUS } from "./ToDoList/components/ui/constans.js";

export const initialItem = {
  id: getId(),
  title: "Заголовок",
  status: STATUS.CURRENT,
};

class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = [];
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((item) => item !== listener);
    };
  }

  getState() {
    return this.state;
  }

  setState(newState) {
    localStorage.state = JSON.stringify(newState);
    this.state = newState;
    for (const listener of this.listeners) listener();
  }

  onMarkEvenTask = () => {
    this.setState({
      ...this.getState(),
      markEvenTask: !this.state.markEvenTask,
    });
  };

  onMarkOddTask = () => {
    this.setState({
      ...this.getState(),
      markOddTask: !this.state.markOddTask,
    });
  };

  onMarkTaskComplete = (id) => {
    this.setState({
      ...this.getState(),
      list: [
        ...this.state.list.map((el) => {
          if (el.id === id) {
            return {
              ...el,
              status:
                el.status === STATUS.COMPLETE
                  ? STATUS.CURRENT
                  : STATUS.COMPLETE,
            };
          } else return el;
        }),
      ],
    });
  };

  onDelete = (id) => {
    this.setState({
      ...this.getState(),
      list: [...this.state.list.filter((item) => item.id !== id)],
    });
  };

  onDeleteFirstTask = () => {
    let newList = this.getState().list;
    newList.shift();
    this.setState({
      ...this.getState(),
      list: newList,
    });
  };

  onDeleteLastTask = () => {
    let newList = this.getState().list;
    newList.pop();
    this.setState({
      ...this.getState(),
      list: newList,
    });
  };

  onAddTask(title) {
    this.setState({
      ...this.getState(),
      list: [
        ...this.state.list,
        {
          id: getId(),
          title,
          status: "current",
        },
      ],
    });
  }
}

export default Store;
