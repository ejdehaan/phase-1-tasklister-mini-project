
document.addEventListener("DOMContentLoaded", () => {
  let newToDoForm = document.getElementById("create-task-form");
  newToDoForm.addEventListener("submit", createNewTask);
});

function appendNewTask (toDo) {
  document.getElementById("tasks").appendChild(toDo);
};

function createNewTask(event) {
  event.preventDefault();
  let newToDoDescr = document.getElementById("new-task-description");
  let newToDo = document.createElement("li");
  newToDo.innerText = newToDoDescr.value;
  appendNewTask(newToDo);
  event.target.reset();
};

