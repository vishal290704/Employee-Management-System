import React, { useState } from "react";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [task, setTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    const allNewTask = {
    taskTitle,
    taskDescription,
    taskDate,
    category,
    active: false,
    newTask: true,
    failed: false,
    completed: false,
  };
  setTask(allNewTask);
  const data = JSON.parse(localStorage.getItem('employees'))
    // console.log(data);
    data.forEach(function(elem){
        // console.log(elem.firstName);
        if(assignTo == elem.firstName) {
            console.log("yahi hai vo");
            
        }       
    })

//   Reset all states once form is submitted
  setTaskTitle("");
  setTaskDescription("");
  setTaskDate("");
  setAssignTo("");
  setCategory("");
  }
  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Task title</h3>
            <input
                value={taskTitle}
                onChange={(e)=>{
                    setTaskTitle(e.target.value)
                }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              placeholder="Make a UI design"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Date</h3>
            <input
             value={taskDate}
                onChange={(e)=>{
                    setTaskDate(e.target.value)
                }}
              className="[&::-webkit-calendar-picker-indicator]:invert text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Assign To</h3>
            <input
             value={assignTo}
                onChange={(e)=>{
                    setAssignTo(e.target.value)
                }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              placeholder="Employee Name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Category</h3>
            <input
             value={category}
                onChange={(e)=>{
                    setCategory(e.target.value)
                }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              placeholder="design, dev, etc"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-1">Task Description</h3>
          <textarea
           value={taskDescription}
                onChange={(e)=>{
                    setTaskDescription(e.target.value)
                }}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400"
            name=""
            id=""
            placeholder="Create a modern and responsive UI design for the new project."
          ></textarea>
          <button
            className="bg-emerald-600 bg-gray-2 hover:bg-emerald-700 px-5 py-2 rounded text-sm mt-4 w-full"
            type="submit"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
