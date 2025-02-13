import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "mobx-react";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import TasksService from "./services/tasks.service";
import TasksStore from "./stores/tasks.store";
import UserStore from "./stores/user.store";
import AuthService from "./services/auth.service";
import AppRouterStore from "./stores/router.store";

const services = {};
const stores = {};

// Initialize services
services.tasksService = new TasksService();
services.authService = new AuthService();

// Initialize stores with services
stores.tasksStore = new TasksStore(services.tasksService);
stores.userStore = new UserStore(services.authService);

// Initialize router store
const browserHistory = createBrowserHistory();
stores.routerStore = new AppRouterStore();
stores.routerStore.setHistory(browserHistory);

// Listen to history changes
browserHistory.listen((update) => {
  stores.routerStore.setLocation(update.location);
});

// Add this for debugging
console.log("Public URL:", process.env.PUBLIC_URL);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider {...stores}>
    <BrowserRouter basename={process.env.PUBLIC_URL} history={browserHistory}>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
