import React from "react";

const TaskListNumbers = ({ data }) => {
  const stats = data?.taskNumbers;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 mt-5 gap-4">
      {/* New Tasks */}
      <div
        className="
          rounded-xl p-6 border
          bg-red-50 border-red-200
          dark:bg-red-500/10 dark:border-red-500/20
          hover:shadow-lg transition
        "
      >
        <h2 className="text-3xl font-semibold text-red-600 dark:text-red-400 text-center">
          {stats?.newTask ?? 0}
        </h2>
        <p className="text-sm text-gray-700 dark:text-gray-300 text-center mt-1">
          New Tasks
        </p>
      </div>

      {/* Active Tasks */}
      <div
        className="
          rounded-xl p-6 border
          bg-blue-50 border-blue-200
          dark:bg-blue-500/10 dark:border-blue-500/20
          hover:shadow-lg transition
        "
      >
        <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 text-center">
          {stats?.active ?? 0}
        </h2>
        <p className="text-sm text-gray-700 dark:text-gray-300 text-center mt-1">
          Active Tasks
        </p>
      </div>

      {/* Completed Tasks */}
      <div
        className="
          rounded-xl p-6 border
          bg-emerald-50 border-emerald-200
          dark:bg-emerald-500/10 dark:border-emerald-500/20
          hover:shadow-lg transition
        "
      >
        <h2 className="text-3xl font-semibold text-emerald-600 dark:text-emerald-400 text-center">
          {stats?.completed ?? 0}
        </h2>
        <p className="text-sm text-gray-700 dark:text-gray-300 text-center mt-1">
          Completed
        </p>
      </div>

      {/* Failed Tasks */}
      <div
        className="
          rounded-xl p-6 border
          bg-yellow-50 border-yellow-200
          dark:bg-yellow-500/10 dark:border-yellow-500/20
          hover:shadow-lg transition
        "
      >
        <h2 className="text-3xl font-semibold text-yellow-600 dark:text-yellow-400 text-center">
          {stats?.failed ?? 0}
        </h2>
        <p className="text-sm text-gray-700 dark:text-gray-300 text-center mt-1">
          Failed
        </p>
      </div>
    </div>
  );
};

export default TaskListNumbers;
