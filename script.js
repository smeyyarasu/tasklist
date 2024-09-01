document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText) {
        const taskList = document.getElementById("taskList");
        const taskItem = document.createElement("li");

        taskItem.textContent = taskText;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            taskItem.remove();
            saveTasks();
        };

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);

        taskInput.value = "";
        saveTasks();
    }
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll("#taskList li").forEach(taskItem => {
        tasks.push(taskItem.firstChild.textContent);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskList = document.getElementById("taskList");

    tasks.forEach(taskText => {
        const taskItem = document.createElement("li");

        taskItem.textContent = taskText;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            taskItem.remove();
            saveTasks();
        };

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
    });
}
