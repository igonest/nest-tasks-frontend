// import React, { Component } from "react";
// import { Routes, Route } from "react-router-dom";
// import { inject, observer } from "mobx-react";

// import SignInPage from "./pages/signin/SignInPage";
// import SignUpPage from "./pages/signup/SignUpPage";
// import TasksPage from "./pages/tasks/TasksPage";
// import CreateTaskPage from "./pages/create-task/CreateTaskPage";

// @inject("routerStore")
// @observer
// class App extends Component {
//   render() {
//     // Add this for debugging
//     console.log("App component rendered");

//     return (
//       <Routes>
//         <Route path="/" element={<SignInPage />} />
//         <Route path="/signin" element={<SignInPage />} />
//         <Route path="/signup" element={<SignUpPage />} />
//         <Route path="/tasks" element={<TasksPage />} />
//         <Route path="/tasks/create" element={<CreateTaskPage />} />
//       </Routes>
//     );
//   }
// }

const App = () => {
  console.log("Before return in App");

  // Add error boundary
  try {
    return (
      <div>
        <h1>Test Page</h1>
      </div>
    );
  } catch (error) {
    console.error("Error in App render:", error);
    return <div>Error occurred</div>;
  }
};

// Log that the file is being processed
console.log("App.js is being processed");

export default App;
