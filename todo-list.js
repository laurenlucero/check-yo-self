class ToDoList {
  constructor(id, title, tasks) {
    this.id = id;
    this.title = title;
    this.tasks = tasks;
    this.urgent = false;
  }
  saveToStorage(array) {
    // save to local storage
    localStorage.setItem('list', JSON.stringify(array))
  }
  getFromStorage(toDoList) {
    var stringifiedTasks = localStorage.getItem('list')
    var parsedTasks = JSON.parse(stringifiedTasks)
    toDoLists = parsedTasks || []
    instantiateToDoLists()
    displaySavedToDoLists(toDoLists)
  }
  addItemsToList() {
    this.title = listTitleInput;
    this.tasks.push(task)
  }
  deleteFromStorage() {
    // remove from local storage
    localStorage.removeItem('list')
  }
  updateToDo() {
    // should update the todo's title and urgency
  }
  updateTask() {
    // should update a task's content and if it has been completed
  }
}
