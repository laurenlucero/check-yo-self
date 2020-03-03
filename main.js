var toDoList = new ToDoList()
var listTitleInput = document.querySelector('.title-input')
var taskItemInput = document.querySelector('.task-input')
var taskDraftList = document.querySelector('.task-draft-list')
var addTaskItemBtn = document.querySelector('.add-btn')
var makeToDoListBtn = document.querySelector('.make-list-btn')
var clearToDoDraftBtn = document.querySelector('.clear-btn')
var taskCards = document.querySelector('main')
var noToDosMsg = document.querySelector('.no-to-dos')
var draftTasks = []
var toDoLists = []

window.onload = toDoList.getFromStorage()
addTaskItemBtn.addEventListener('click', checkTaskItemInput)
taskDraftList.addEventListener('click', removeTaskDraftItem)
makeToDoListBtn.addEventListener('click', makeToDoList)
clearToDoDraftBtn.addEventListener('click', clearToDoDraft)
taskCards.addEventListener('click', markAsComplete)

function instantiateToDoLists() {
  var instantiatedToDoLists = []
  for (var i = 0; i < toDoLists.length; i++) {
    var instantiatedTasks = []
    for(var j = 0; j < toDoLists[i].tasks.length; j++) {
      var task = new Task(toDoLists[i].tasks[j].id, toDoLists[i].tasks[j].taskName, toDoLists[i].tasks[j].completed)
      instantiatedTasks.push(task)
    }
    var toDoList = new ToDoList(toDoLists[i].id, toDoLists[i].title, instantiatedTasks)
    instantiatedToDoLists.push(toDoList)
  }
  toDoLists = instantiatedToDoLists
}

function displaySavedToDoLists(array) {
 for (var i = 0; i < array.length; i++) {
   taskCards.innerHTML+=
 `<section class="task-card">
   <h3 class="list-title">${array[i].title}</h3>
   <div class="task-list" data-id=${array[i].id}>${displaySavedTasks(array[i].tasks)}</div>
   <div class="urgent-delete-btns">
     <p class="urgent-btn"><img src="assets/urgent.svg">Urgent</p>
     <p class="delete-btn"><img src="assets/delete.svg">Delete</p>
   </div>
   </section>`
 }
}

function displaySavedTasks(array) {
  var individualTask = '';
  for (var i = 0; i < array.length; i++) {
  if (array[i].completed == false) {
  individualTask +=
  `<span class="task-list-item"><img class="checkbox" data-id=${array[i].id} src="assets/checkbox.svg">${array[i].taskName}</span>`
} else {
  individualTask +=
  `<span class="task-list-item completed-task"><img class="checkbox" data-id=${array[i].id} src="assets/checkbox-active.svg">${array[i].taskName}</span>`
}
  }
  return individualTask
}

function checkTaskItemInput() {
  var taskRequired = document.querySelector('.task-required')
  if (taskItemInput.value === '') {
    taskRequired.hidden = false;
    return;
  } else {
    taskRequired.hidden = true;
    addNewTaskItem()
  }
  taskItemInput.value = '';
}

function addNewTaskItem() {
  var task = new Task(Date.now(), taskItemInput.value)
  taskDraftList.innerHTML+=
  `<p class="draft-task" data-id=${task.id}>
  <img class='remove-task-btn' src="assets/delete.svg">${task.taskName}</p>`
  addTaskToDraftTasks(task)
}

function addTaskToDraftTasks(task) {
  draftTasks.push(task)
}

function removeTaskDraftItem(event) {
  if (event.target.className === 'remove-task-btn') {
    var draftTaskItem = event.target.closest('.draft-task')
    var taskId = draftTaskItem.dataset.id;
    draftTaskItem.remove()
    removeTaskFromDrafts(taskId)
  }
}

function removeTaskFromDrafts(taskId) {
  var taskIdNumber = parseInt(taskId)
  for (var i = 0; i < draftTasks.length; i++) {
    var deletedTask = draftTasks[i]
    if (deletedTask.id === taskIdNumber) {
      draftTasks.splice(i, 1)
      break;
    }
  }
}

function makeToDoList() {
  if (listTitleInput.value === '' || taskDraftList.innerHTML === ``) {
    return
  } else {
    var toDoList = new ToDoList(Date.now(), listTitleInput.value, draftTasks)
    toDoLists.push(toDoList)
    taskCards.innerHTML+=
  `<section class="task-card">
    <h3 class="list-title">${listTitleInput.value}</h3>
    <div class="task-list" data-id=${toDoList.id}> </div>
    <div class="urgent-delete-btns">
      <p class="urgent-btn"><img src="assets/urgent.svg">Urgent</p>
      <p class="delete-btn"><img src="assets/delete.svg">Delete</p>
    </div>
    </section>`
    var tasksList = document.querySelector(`.task-list[data-id='${toDoList.id}']`)
    for (var i = 0; i < toDoList.tasks.length; i++) {
      tasksList.innerHTML+=
      `<span class="task-list-item"><img class="checkbox" data-id=${toDoList.tasks[i].id} src="assets/checkbox.svg">${toDoList.tasks[i].taskName}</span>`
    }
 }
 toDoList.saveToStorage(toDoLists)
 noToDosMessage()
 clearToDoDraft()
}

function noToDosMessage() {
 if (toDoLists.length === 0) {
   noToDosMsg.hidden = false
 } else {
   noToDosMsg.hidden = true
 }
}

function clearToDoDraft() {
  if (listTitleInput.value === '' && taskItemInput.value === '') {
    return
  } else {
  listTitleInput.value = '';
  taskItemInput.value = '';
  taskDraftList.innerHTML = ``;
  draftTasks = [];
 }
}

function markAsComplete(event) {
  var taskId = event.target.dataset.id
  var listId = event.target.parentNode.parentNode.dataset.id
  console.log(taskId);
  console.log(listId);
  if (event.target.classList.contains('checkbox')) {
    event.target.src = "assets/checkbox-active.svg"
    var taskListItem = event.target.closest('.task-list-item')
    taskListItem.classList.add('completed-task')
  }
  completedIsTrue(taskId, listId)
}

function completedIsTrue(taskId, listId) {
  var toDoListInstance = toDoLists.find(list => list.id == listId)
  console.log(toDoListInstance);
  toDoListInstance.updateTask(taskId)
}
