import React from "react";
import Header from "../../other/Header";
import TaskListNumbers from "../../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = (props) => {
  return (
    <div
      className="
        min-h-screen
        p-10
        bg-gray-100 dark:bg-[#020617]
        text-gray-900 dark:text-gray-100
        transition-colors duration-300
      "
    >
      <Header
        changeUser={props.changeUser}
        data={props.loggedInUserData}
      />
      <TaskListNumbers data={props.loggedInUserData} />
      <TaskList data={props.loggedInUserData} />
    </div>
  );
};

export default EmployeeDashboard;
