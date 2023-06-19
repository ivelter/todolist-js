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
        <button class="upArrow" type="button" onClick="moveTaskUp(${newTask.taskID})">⬆️</button>
        <button class="downArrow" type="button" onClick="moveTaskDown(${newTask.taskID})">⬇️</button>
        <button class="trashButton" type="button" onClick="deleteTask(${newTask.taskID})">🗑️</button>
    `
    tlElement = document.createElement('div')
    tlElement.setAttribute("id", "task"+newTask.taskID)
    tlElement.setAttribute("class", "task")
    tlElement.innerHTML = newNode
    tl = document.getElementById("taskList")
    tl.appendChild(tlElement)
}

function moveTaskUp(taskID) {

}

function moveTaskDown(taskID) {
    
}

function deleteTask(taskID) {
    document.getElementById("task"+taskID).remove()
    for(i = 0; i < taskList.length; i++) {
        if(taskList[i].taskID == taskID) {
            taskList.pop(i)
            return
        }
    }
}

function loadTasks() {
    // For now only loads 1 empty task, I could however add a local cache save fonctionality
    addTask()
}

function saveTasks() {
    // See loadTasks() for why this function is empty
}

loadTasks()