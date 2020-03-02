class ToDoList {
  constructor(title, tasks) {
    this.id = Date.now()
    this.title = title;
    this.tasks = tasks;
    this.urgent = false;
  }
  saveToStorage(array) {
    // save to local storage
    localStorage.setItem('list', JSON.stringify(array))
  }
  getFromStorage() {
    var stringifiedTasks = localStorage.getItem('list') || '[]'
    var parsedTasks = JSON.parse(stringifiedTasks)
    displayTaskCards(parsedTasks)
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
  addItemsToList() {
    this.title = listTitleInput;
    this.tasks.push(task)
  }
}
