console.log('Todo-list test')

class ToDoList {
  constructor(title) {
    this.id = Date.now()
    this.title = title;
    this.tasks = []
    this.urgent = false;
  }
  savetoStorage() {
    // save to local storage
    localStorage.setItem('toDoList', JSON.stringify())
    var stringifiedTasks = localStorage.getItem('toDoList') || '[]'
    var parsedTasks = JSON.parse(stringifiedTasks)
  }
  deleteFromStorage() {
    // remove from local storage
    localStorage.removeItem('toDoList')
  }
  updateToDo() {
    // should update the todo's title and urgency
  }
  updateTask() {
    // should update a task's content and if it has been completed
  }
  // addItemToTasks(task) {
  //   this.tasks.push(task)
  // }
}
