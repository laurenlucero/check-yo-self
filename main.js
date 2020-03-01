console.log('Main test')

var task = new Task()
var toDoList = new ToDoList()
var addTaskItemBtn = document.querySelector('.add-btn')
var listTitleInput = document.querySelector('.title-input')
var taskItemInput = document.querySelector('.task-input')
var taskDraftList = document.querySelector('.task-draft-list')
var makeToDoListBtn = document.querySelector('.make-list-btn')
var clearToDoDraftBtn = document.querySelector('.clear-btn')
var taskCards = document.querySelector('main')
var listTitle = document.querySelector('.list-title')
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
  task.addTask(taskItemInput.value)
  taskDraftList.innerHTML+=
  `<p class="draft-task" id=${task.id}>
  <img class='remove-task-btn' src="assets/delete.svg">${taskItemInput.value}</p>`
  // add to task drafts array
}

function removeTaskDraftItem(event) {
  if (event.target.className === 'remove-task-btn') {
    event.target.closest('.draft-task').remove()
    // remove from task drafts array
  }
}

// new card with title and tasks should display
// form should clear and be ready for new to do
// make to do list button disabled if either input empty
// page should not reload
// todo card should be persisted when page reloads

function makeToDoList() {
  if (listTitleInput.value === '' || taskDraftList.innerHTML === ``) {
    return }
    else
     { taskCards.innerHTML+=
  `<section class="task-card">
    <h3 class="list-title">Title</h3>
    <div class="task-list">
      <span><img src="assets/checkbox.svg">Task</span>
    </div>
    <div class="urgent-delete-btns">
      <p class="urgent-btn"><img src="assets/urgent.svg">Urgent</p>
      <p class="delete-btn"><img src="assets/delete.svg">Delete</p>
    </div>
    </section>`
    listTitleInput.value = '';
    taskItemInput.value = '';
    taskDraftList.innerHTML = ``;
 }
}

function clearToDoDraft() {
  if (listTitleInput.value === '' && taskItemInput.value === '') {
    return
  } else {
  listTitleInput.value = '';
  taskItemInput.value = '';
  taskDraftList.innerHTML = ``;
 }
}
