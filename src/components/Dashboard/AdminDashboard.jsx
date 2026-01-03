import React from "react";
import Header from "../../other/Header";
import CreateTask from "../../other/CreateTask";
import AllTask from "../../other/AllTask";

const AdminDashboard = (props) => {
  return (
    <div
      className="
        min-h-screen w-full p-7
        bg-gray-100 dark:bg-[#020617]
        text-gray-900 dark:text-gray-100
        transition-colors duration-300
      "
    >
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
