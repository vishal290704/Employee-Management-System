import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[45%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full mt-10 py-5 rounded-lg"
    >
        {data?.tasks?.map((task, index) => {
        if (task.failed) {
          return <FailedTask key={index} task={task} data={data} />
        }

        if (task.completed) {
          return <CompleteTask key={index} task={task} data={data} />
        }

        if (task.newTask) {
          return <NewTask key={index} task={task} data={data}/>
        }

        if (task.status) {
          return <AcceptTask key={index} task={task} data={data}/>
        }

        return null
      })} 
    </div>
  );
};

export default TaskList;
