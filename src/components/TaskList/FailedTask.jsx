import React, { useState } from "react";

const FailedTask = ({ task }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = task.description.length > 120;

  return (
    <div
      className="
        w-full min-h-[260px]
        bg-white dark:bg-[#0f172a]
        border border-red-300 dark:border-red-600/30
        rounded-2xl
        p-5
        flex flex-col
        transition-colors duration-300
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span
          className="
            text-xs font-semibold px-3 py-1 rounded-full
            bg-red-100 text-red-700
            dark:bg-red-500/10 dark:text-red-400
          "
        >
          {task.category}
        </span>

        <span className="text-xs text-gray-500 dark:text-gray-400">
          {task.date}
        </span>
      </div>

      {/* Content */}
      <div className="mt-4 flex-1">
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
              text-red-600 hover:underline
              dark:text-red-400
            "
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 dark:border-gray-700/60 my-4"></div>

      {/* Status */}
      <div className="min-h-[44px] flex items-center">
        <button
          disabled
          className="
            w-full
            bg-red-100 text-red-700
            dark:bg-red-600/20 dark:text-red-400
            text-sm py-2.5 rounded-lg
            cursor-default
          "
        >
          Failed ✕
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
