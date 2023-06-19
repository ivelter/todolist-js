var taskList = []
var currentTaskID = 0

Array.prototype.pushTask = (...args) => {
    this.push(...args)
    updateTasks()
}

function addTask() {
    newTask = {taskID:currentTaskID, taskDescription: ""}
    currentTaskID++
    taskList.pushTask(newTask)
}

function updateTasks() {
    // Write code to update task list on HTML side here
}

function loadTasks() {
    // For now only loads 1 empty task, I could however add a local cache save fonctionality
    addTask()
}

function saveTasks() {
    // See loadTasks() for why this function is empty
}

loadTasks()