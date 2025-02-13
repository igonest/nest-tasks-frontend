import { makeAutoObservable } from "mobx";

export default class AppRouterStore {
  location = null;
  history = null;

  constructor() {
    makeAutoObservable(this);
  }

  setLocation(location) {
    this.location = location;
  }

  setHistory(history) {
    this.history = history;
  }

  push(path) {
    this.history?.push(path);
  }

  replace(path) {
    this.history?.replace(path);
  }
}
