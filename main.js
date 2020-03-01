console.log('Main test')

// var task = new Task()
// var toDoList = new ToDoList()
var listTitleInput = document.querySelector('.title-input')
var taskDraftList = document.querySelector('.task-draft-list')
var taskItemInput = document.querySelector('.task-input')
var addTaskItemBtn = document.querySelector('.add-btn')
var makeToDoListBtn = document.querySelector('.make-list-btn')
var clearToDoDraftBtn = document.querySelector('.clear-btn')
var noToDosMsg = document.querySelector('.no-to-dos')
var taskCards = document.querySelector('main')
var draftTasks = []

addTaskItemBtn.addEventListener('click', checkTaskItemInput)
taskDraftList.addEventListener('click', removeTaskDraftItem)
makeToDoListBtn.addEventListener('click', makeToDoList)
clearToDoDraftBtn.addEventListener('click', clearToDoDraft)

function checkTaskItemInput() {
  var taskRequired = document.querySelector('.task-required')
  if (taskItemInput.value === '') {
    taskRequired.hidden = false;
    return false;
 } else {
   taskRequired.hidden = true;
   addNewTaskItem()
 }
 taskItemInput.value = '';
}

function addNewTaskItem() {
  var task = new Task(taskItemInput.value)
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
    removeTaskFromDraftTasks(taskId)
  }
}

function removeTaskFromDraftTasks(taskId) {
  var taskIdNumber = parseInt(taskId)
  for (var i = 0; i < draftTasks.length; i++) {
    var deletedTask = draftTasks[i]
    if (deletedTask.id === taskIdNumber) {
      draftTasks.splice(i, 1)
      break;
    }
  }
}

// new card with title and tasks should display
// page should not reload
// todo card should be persisted when page reloads

function makeToDoList() {
  if (listTitleInput.value === '' || taskDraftList.innerHTML === ``) {
    return
  } else {
    var title = listTitleInput.value;
    var toDoList = new ToDoList(title, draftTasks)
    taskCards.innerHTML+=
  `<section class="task-card">
    <h3 class="list-title">${title}</h3>
    <div class="task-list" data-id=${toDoList.id}> </div>
    <div class="urgent-delete-btns">
      <p class="urgent-btn"><img src="assets/urgent.svg">Urgent</p>
      <p class="delete-btn"><img src="assets/delete.svg">Delete</p>
    </div>
    </section>`
    var tasksList = document.querySelector(`.task-list[data-id='${toDoList.id}']`)
    for (var i = 0; i < toDoList.tasks.length; i++) {
      tasksList.innerHTML+=
      `<span><img src="assets/checkbox.svg">${toDoList.tasks[i].taskName}</span>`
    }
 }
 clearToDoDraft()
 // noToDosAlert()
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

// function noToDosAlert() {
//   if (taskCards.classList.contains('task-card')) {
//     noToDosMsg.hidden = true;
//   } else {
//     noToDosMsg.hidden = false;
//   }
// }
