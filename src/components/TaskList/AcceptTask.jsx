import React, { useState } from "react";

const AcceptTask = ({ task }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = task.description.length > 120;

  return (
    <div
      className="
        w-full min-h-[260px]
        bg-white dark:bg-[#0f172a]
        border border-gray-200 dark:border-gray-700/60
        rounded-2xl
        p-5
        flex flex-col
        transition-colors duration-300
        hover:border-gray-300 dark:hover:border-gray-500
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span
          className="
            text-xs font-semibold px-3 py-1 rounded-full
            bg-blue-100 text-blue-700
            dark:bg-blue-500/10 dark:text-blue-400
          "
        >
          {task.category}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {task.date}
        </span>
      </div>

      {/* Content */}
      <div className="mt-4">
        <h2 className="text-base font-semibold text-gray-900 dark:text-white leading-snug">
          {task.title}
        </h2>

        <p
          className={`
            text-sm mt-2 leading-relaxed
            text-gray-600 dark:text-gray-400
            ${expanded ? "" : "line-clamp-3"}
          `}
          style={{ minHeight: "72px" }}
        >
          {task.description}
        </p>

        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="
              mt-1 text-xs
              text-blue-600 hover:underline
              dark:text-blue-400
            "
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 dark:border-gray-700/60 my-4"></div>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          className="
            flex-1
            bg-emerald-600 hover:bg-emerald-700
            dark:bg-emerald-600 dark:hover:bg-emerald-500
            text-white text-sm py-2 rounded-lg
            transition
          "
        >
          Mark Complete
        </button>
        <button
          className="
            flex-1
            bg-red-600 hover:bg-red-700
            dark:bg-red-600 dark:hover:bg-red-500
            text-white text-sm py-2 rounded-lg
            transition
          "
        >
          Mark Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
