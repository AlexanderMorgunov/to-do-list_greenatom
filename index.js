import Store, { initialItem } from "./store.js";
import { App } from "./app/App.js";

const body = document.querySelector("body");

export const store = new Store(
  localStorage.length
    ? JSON.parse(localStorage.state)
    : {
        list: [initialItem, { ...initialItem, id: 2, title: "Заголовок 2" }],
        markEvenTask: false,
        markOddTask: false,
      }
);

store.subscribe(() => {
  while (document.body.lastElementChild)
    document.body.removeChild(body.lastElementChild);
  document.body.append(App({ store }));
});

body.append(App({ store }));
