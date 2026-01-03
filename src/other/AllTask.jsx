import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div
      className="
        mt-6 p-4 sm:p-5 rounded
        bg-white dark:bg-[#1c1c1c]
        text-gray-900 dark:text-gray-100
        transition-colors duration-300
      "
    >
      {/* ===== Desktop Header ===== */}
      <div
        className="
          hidden md:flex mb-3 py-2 px-4 rounded font-medium
          bg-red-100 text-red-700
          dark:bg-red-700 dark:text-white
        "
      >
        <div className="w-1/5">Employee</div>
        <div className="w-1/5">New</div>
        <div className="w-1/5">Active</div>
        <div className="w-1/5">Completed</div>
        <div className="w-1/5">Failed</div>
      </div>

      {/* ===== Data ===== */}
      <div className="space-y-3">
        {userData?.map((emp, idx) => (
          <div
            key={idx}
            className="
              rounded-lg p-4
              border border-emerald-300 dark:border-emerald-500
              bg-gray-50 dark:bg-gray-900
              md:flex md:items-center md:justify-between
              transition-colors
            "
          >
            {/* ===== Mobile Card View ===== */}
            <div className="md:hidden space-y-1 text-sm">
              <p className="font-semibold text-gray-900 dark:text-white">
                {emp.firstName}
              </p>
              <p className="text-blue-600 dark:text-blue-400">
                New: {emp.taskNumbers.newTask}
              </p>
              <p className="text-yellow-600 dark:text-yellow-400">
                Active: {emp.taskNumbers.active}
              </p>
              <p className="text-green-600 dark:text-green-400">
                Completed: {emp.taskNumbers.completed}
              </p>
              <p className="text-red-600 dark:text-red-400">
                Failed: {emp.taskNumbers.failed}
              </p>
            </div>

            {/* ===== Desktop Row View ===== */}
            <div className="hidden md:flex w-full font-medium">
              <div className="w-1/5">{emp.firstName}</div>
              <div className="w-1/5 text-blue-600 dark:text-blue-400">
                {emp.taskNumbers.newTask}
              </div>
              <div className="w-1/5 text-yellow-600 dark:text-yellow-400">
                {emp.taskNumbers.active}
              </div>
              <div className="w-1/5 text-green-600 dark:text-green-400">
                {emp.taskNumbers.completed}
              </div>
              <div className="w-1/5 text-red-600 dark:text-red-400">
                {emp.taskNumbers.failed}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
