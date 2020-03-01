console.log('Main test')

var task = new Task()
var toDoList = new ToDoList()
var addTaskItemBtn = document.querySelector('.add-btn')
var listTitleInput = document.querySelector('.list-title-input')
var taskItemInput = document.querySelector('.task-item-input')
var taskDraftList = document.querySelector('.task-draft-list')

addTaskItemBtn.addEventListener('click', checkTaskItemInput)
taskDraftList.addEventListener('click', removeTaskDraftItem)

function checkTaskItemInput() {
  var taskRequired = document.querySelector('.task-required')
  if (taskItemInput.value === '') {
    taskRequired.hidden = false;
    return false;
 } else {
   taskRequired.hidden = true;
   addNewTaskItem()
 }
}

function addNewTaskItem() {
  task.addTask(taskItemInput.value)
  taskDraftList.innerHTML+=
  `<p class="draft-task" id=${task.id}>
  <img class='remove-task-btn' src="assets/delete.svg">${taskItemInput.value}</p>`
}

function removeTaskDraftItem(event) {
  if (event.target.className === 'remove-task-btn') {
    event.target.closest('.draft-task').remove()
  }
}
