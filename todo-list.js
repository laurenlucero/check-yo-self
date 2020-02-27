console.log('Todo-list test');

class ToDoList {
  constructor(id, title, tasks, urgent) {
    this.id = id;
    this.title = '';
    // each task in the array should be an object
    this.tasks = [{}];
    this.urgent = false;
  }
  savetoStorage() {
    // save to local storage
  }
  deleteFromStorage() {
    // remove from local storage
  }
  updateToDo() {
    // should update the todo's title and urgency
  }
  updateTask() {
    // should update a task's content and if it has been completed
  }
}
