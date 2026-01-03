import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  const tasks = data?.tasks || [];

  if (tasks.length === 0) {
    return (
      <div className="mt-10 text-center text-gray-500 dark:text-gray-400">
        No tasks assigned yet.
      </div>
    );
  }

  return (
    <div
      id="tasklist"
      className="
        mt-8
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-5
        items-start
        transition-colors duration-300
      "
    >
      {tasks.map((task, index) => {
        if (task.failed) return <FailedTask key={index} task={task} />;
        if (task.completed) return <CompleteTask key={index} task={task} />;
        if (task.newTask) return <NewTask key={index} task={task} />;

        if (
          task.status &&
          !task.newTask &&
          !task.completed &&
          !task.failed
        ) {
          return <AcceptTask key={index} task={task} />;
        }

        return null;
      })}
    </div>
  );
};

export default TaskList;
