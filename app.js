document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete">delete</button>
            `;
            
            taskList.appendChild(listItem);
            taskInput.value = "";

            // Attach a click event to the delete button
            const deleteButton = listItem.querySelector(".delete");
            deleteButton.addEventListener("click", function () {
                listItem.remove();
            });
        }
    });

    // Handle Enter key press
    taskInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            addTaskButton.click();
        }
    });
});
