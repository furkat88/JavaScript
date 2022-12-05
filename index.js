const input = document.querySelector("#todo_text");
const addButton = document.querySelector(".add_todo_button");
const todosContainer = document.querySelector(".todos_container");
const modal = document.querySelector(".modal_wrapper");
const closeModal = document.querySelector(".closeModalBtn");
const newTaskText = document.querySelector(".newTaskText");
const addNewtask = document.querySelector(".newTaskBtn");

let todos = [];

addButton.onclick = (e) => {
  e.preventDefault();
  function getdate() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const day = date.getDate();
    const month = date.getMonth();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return `${hours}:${minutes < 10 ? "0" + minutes : minutes} "${day} ${
      monthNames[month]
    }"`;
  }

  function creatTodo(text) {
    const box = document.createElement("div");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const close = document.createElement("div");
    const edit = document.createElement("span");
    edit.classList.add("edit_btn");
    edit.innerText = "Edit";
    box.classList.add("todo_box");
    close.classList.add("todo_close");
    close.innerHTML = "&#10006";
    h3.innerText = text;
    p.innerText = getdate();
    box.appendChild(h3);
    box.appendChild(p);
    box.appendChild(close);
    box.appendChild(edit);

    return box;
  }

  function render(arrOfTodos) {
    if (arrOfTodos.length)
      arrOfTodos.forEach((todo) =>
        todosContainer.appendChild(todo.todoEelemnet)
      );
  }

  if (input.value.length > 0) {
    let todo = creatTodo(input.value);
    todos.push({ todoEelemnet: todo });
    render(todos);
    input.value = "";
  }

  todos.forEach((el) => {
    el.todoEelemnet.childNodes[2].onclick = function () {
      this.parentElement.remove();
      todos = todos.filter((elem) => elem.todoEelemnet !== el.todoEelemnet);
    };
  });

  todos.forEach((el) => {
    el.todoEelemnet.childNodes[3].onclick = function () {
      modal.classList.add("show");
      newTaskText.value = el.todoEelemnet.childNodes[0].innerText
      addNewtask.onclick = (e) => {
        e.preventDefault();
        el.todoEelemnet.childNodes[0].innerText = newTaskText.value
        newTaskText.value = "";
      };
    };
  });
};

closeModal.onclick = () => {
  modal.classList.remove("show");
};
