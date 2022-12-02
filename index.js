const input = document.querySelector("#todo_text");
const addButton = document.querySelector(".add_todo_button");
const todosContainer = document.querySelector(".todos_container");



addButton.onclick = () => {

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

    return `${hours}:${minutes < 10 ? '0' + minutes : minutes} "${day} ${monthNames[month]}"`;
  }

  function creatTodo(text) {
    const box = document.createElement("div");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const close = document.createElement("div");
    box.classList.add("todo_box");
    close.classList.add("todo_close");
    close.innerHTML = "&#10006";
    h3.innerText = text;
    p.innerText = getdate();
    box.appendChild(h3);
    box.appendChild(p);
    box.appendChild(close);

    return box;
  }

  let todos = [];

  function render(arr) {
    if (arr) arr.forEach((todo) => todosContainer.appendChild(todo));
  }

  if (input.value.length > 0) {
    let todo = creatTodo(input.value);
    todos.push(todo);
    render(todos);
    input.value = ''
  }

  todos.forEach(el => {
    el.childNodes[2].onclick = function() {
      this.parentElement.remove()
    }
  })

  todos = [...todosContainer.children]
};






