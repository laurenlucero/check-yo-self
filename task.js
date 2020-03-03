class Task {
  constructor(id, name, completed) {
    this.id = id
    this.taskName = name;
    this.completed = false;
    if (completed === true) {
      this.completed = true;
    }
  }
}
