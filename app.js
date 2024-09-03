document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");

  // Function to save tasks to localStorage
  function saveTasks() {
    const tasks = Array.from(taskList.children).map((li) =>
      li.firstChild.textContent.trim()
    );
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Function to load tasks from localStorage
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((taskText) => addTaskToList(taskText));
  }

  // Function to add a task to the list
  function addTaskToList(taskText) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <li class="taskItem">${taskText}
          <button class="delete">--</button>
        </li>
      `;
    taskList.appendChild(listItem);

    // Attach a click event to the delete button
    const deleteButton = listItem.querySelector(".delete");
    deleteButton.addEventListener("click", function () {
      listItem.remove();
      saveTasks(); // Save tasks after deleting
    });
  }

  addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText) {
      addTaskToList(taskText);
      taskInput.value = "";
      saveTasks(); // Save tasks after adding
    }
  });

  // Handle Enter key press
  taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addTaskButton.click();
    }
  });

  // Load tasks when the page loads
  loadTasks();
});
