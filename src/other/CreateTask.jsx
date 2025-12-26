import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const allNewTask = {
      title: taskTitle,
      description: taskDescription,
      date: taskDate,
      category,
      status: true,
      newTask: true,
      completed: false,
      failed: false,
    };

    const updatedData = userData.map((emp) => {
      if (emp.firstName === assignTo) {
        return {
          ...emp,
          tasks: [...emp.tasks, allNewTask],
          taskNumbers: {
            ...emp.taskNumbers,
            newTask: emp.taskNumbers.newTask + 1,
            active: emp.taskNumbers.active + 1,
          },
        };
      }
      return emp;
    });

    setUserData(updatedData);

    // reset all forms input once after submitted
    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
  };

  return (
    <div className="bg-[#1c1c1c] p-4 sm:p-6 mt-7 rounded-xl">
      <form
        onSubmit={submitHandler}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* left section  */}
        <div className="space-y-4">
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="w-full text-sm py-2 px-3 rounded
                         outline-none bg-transparent
                         border border-gray-400"
              type="text"
              placeholder="Make a UI design"
              required
            />
          </div>

         <div>
  <h3 className="text-sm text-gray-300 mb-1">Date</h3>

  <div className="relative w-full">
    <input
      value={taskDate}
      onChange={(e) => setTaskDate(e.target.value)}
      type="date"
      required
      className="
        w-full h-[42px]
        text-sm px-3 pr-10
        rounded outline-none
        bg-transparent
        border border-gray-400
        text-gray-400

        [&::-webkit-calendar-picker-indicator]:absolute
        [&::-webkit-calendar-picker-indicator]:right-3
        [&::-webkit-calendar-picker-indicator]:top-1/2
        [&::-webkit-calendar-picker-indicator]:-translate-y-1/2
        [&::-webkit-calendar-picker-indicator]:invert
        [&::-webkit-calendar-picker-indicator]:opacity-60
        [&::-webkit-calendar-picker-indicator]:cursor-pointer
      "
    />
  </div>
</div>


        <div>
  <h3 className="text-sm text-gray-300 mb-1">Assign To</h3>

  <div className="relative w-full">
    <select
      value={assignTo}
      onChange={(e) => setAssignTo(e.target.value)}
      className="
        w-full h-[42px]
        text-sm px-3 pr-10
        rounded outline-none
        bg-[#1c1c1c]
        border border-gray-400
        text-gray-400
        appearance-none
      "
      required
    >
      <option value="" disabled>
        Select Employee
      </option>
      {userData?.map((emp) => (
        <option key={emp.id} value={emp.firstName}>
          {emp.firstName}
        </option>
      ))}
    </select>

    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
      ▼
    </span>
  </div>
</div>


          <div>
            <h3 className="text-sm text-gray-300 mb-1">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full text-sm py-2 px-3 rounded
                         outline-none bg-transparent
                         border border-gray-400"
              type="text"
              placeholder="Design, Development, etc"
              required
            />
          </div>
        </div>

            {/* right section  */}
        <div className="flex flex-col">
          <h3 className="text-sm text-gray-300 mb-1">Task Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full min-h-[180px] text-sm py-2 px-3 rounded
                       outline-none bg-transparent
                       border border-gray-400 resize-none"
            placeholder="Create a modern and responsive UI design for the new project."
            required
          />

          <button
            type="submit"
            className="mt-4 w-full bg-emerald-600
                       hover:bg-emerald-700
                       py-2.5 rounded text-sm font-medium
                       transition active:scale-95"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
