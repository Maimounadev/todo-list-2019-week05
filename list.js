

const taskList = document.getElementById("task-list");
const addButton = document.getElementById("add-task");
const input = document.getElementById("new-task");
const clear = document.getElementById('clearAll');
const countElement = document.getElementById('task-count');
let taskCount = 0;

function addTask() {
  const task = input.value;
  const listItem = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("click", completeTask);
  const label = document.createElement("label");
  label.innerText = task;
  
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", deleteTask);

  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(deleteButton);
  taskList.appendChild(listItem);
  input.value = "";
  taskCount++;
  countElement.innerText = `Task Count: ${taskCount}`;
}

function completeTask() {
  const listItem = this.parentNode;
  if (this.checked) {
    listItem.classList.add("completed");
  } else {
    listItem.classList.remove("completed");
  }
}

function deleteTask() {
  const listItem = this.parentNode;
  taskList.removeChild(listItem);
  taskCount--;
  countElement.innerText = `Task Count: ${taskCount}`;
}

function clearAllTasks() {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  taskCount = 0;
  countElement.innerText = `Task Count: ${taskCount}`;
}

addButton.addEventListener("click", addTask);
clear.addEventListener("click", clearAllTasks);

