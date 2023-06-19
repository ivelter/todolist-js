var taskList = Array()
var currentTaskID = 0

Array.prototype.pushTask = (...args) => {
    this.push(...args)
    updateNewTask()
}

function addTask() {
    newTask = {taskID:currentTaskID, taskDescription: "", done:false}
    currentTaskID++
    taskList.push(newTask)
    updateNewTask()
}

function updateNewTask() {
    newTask = taskList[taskList.length-1]
    newNode = `
        <input class="checkbox" type="checkbox" id="task${newTask.taskID}check">
        <textarea class="textInput" type="textarea" id="task${newTask.taskID}text" wrap="hard" maxlength="38" placeholder="Task Description">${newTask.taskDescription}</textarea>
        <button class="upArrow" type="button">⬆️</button>
        <button class="downArrow" type="button">⬇️</button>
        <button class="trashButton" type="button">🗑️</button>
    `
    tlElement = document.createElement('div')
    tlElement.setAttribute("id", "task"+newTask.taskID)
    tlElement.setAttribute("class", "task")
    tlElement.innerHTML = newNode
    tl = document.getElementById("taskList")
    tl.appendChild(tlElement)
}

function loadTasks() {
    // For now only loads 1 empty task, I could however add a local cache save fonctionality
    addTask()
}

function saveTasks() {
    // See loadTasks() for why this function is empty
}

loadTasks()