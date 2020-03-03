class Task {
  constructor(name) {
    this.id = Date.now()
    this.taskName = name;
    this.completed = false;
  }
}
