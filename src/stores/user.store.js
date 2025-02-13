import { makeObservable, observable, action } from "mobx";

export default class UserStore {
  username = null;

  constructor(authService) {
    this.authService = authService;
    makeObservable(this, {
      username: observable,
      signin: action,
      signup: action,
      signout: action,
    });
  }

  async signin(username, password) {
    this.username = await this.authService.signin(username, password);
  }

  async signup(username, password) {
    return this.authService.signup(username, password);
  }

  signout() {
    this.username = null;
    this.authService.removeToken();
  }
}
