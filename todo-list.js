class ToDoList {
  constructor(id, title, tasks) {
    this.id = id;
    this.title = title;
    this.tasks = tasks;
    this.urgent = false;
  }
  addItemsToList() {
    this.title = listTitleInput;
    this.tasks.push(task)
  }
  saveToStorage(array) {
    localStorage.setItem('list', JSON.stringify(array))
  }
  getFromStorage(toDoList) {
    var stringifiedTasks = localStorage.getItem('list')
    var parsedTasks = JSON.parse(stringifiedTasks)
    toDoLists = parsedTasks || []
    instantiateToDoLists()
    displaySavedToDoLists(toDoLists)
  }
  deleteFromStorage() {
    // remove from local storage
    localStorage.removeItem('list')
  }
  updateTask(taskId) {
    // should update a task's content and if it has been completed
  var completedTask = this.tasks.find(item => item.id == taskId)
  console.log(completedTask.completed);
  completedTask.completed = !completedTask.completed;
  this.saveToStorage(toDoLists)
  console.log(completedTask.completed);
 }
 updateToDo() {
   // should update the todo's title and urgency
 }
}
