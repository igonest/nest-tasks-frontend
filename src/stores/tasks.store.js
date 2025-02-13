import { makeObservable, observable, action } from "mobx";

export default class TasksStore {
  tasks = [];
  filters = { status: "", search: "" };

  constructor(tasksService) {
    this.tasksService = tasksService;
    makeObservable(this, {
      tasks: observable,
      filters: observable,
      resetTasks: action,
      fetchTasks: action,
      createTask: action,
      deleteTask: action,
      updateTaskStatus: action,
      updateFilters: action,
    });
  }

  updateFilters({ status, search }) {
    this.filters.status = status;
    this.filters.search = search;
    this.fetchTasks();
  }

  resetTasks() {
    this.tasks = [];
  }

  async fetchTasks() {
    const result = await this.tasksService.fetchTasks(this.filters);
    if (result) {
      this.tasks = result.data;
    }
  }

  async createTask(title, description) {
    const result = await this.tasksService.createTask(title, description);
    if (result) {
      this.tasks.push(result.data);
    }
  }

  async deleteTask(id) {
    const idx = this.tasks.findIndex((task) => task.id === id);
    await this.tasksService.deleteTask(id);
    this.tasks.splice(idx, 1);
  }

  async updateTaskStatus(id, status) {
    const task = this.tasks.find((task) => task.id === id);
    await this.tasksService.updateTaskStatus(id, status);
    task.status = status;
  }
}
