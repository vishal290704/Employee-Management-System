import React, { useState } from "react";

const NewTask = ({ task }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = task.description.length > 120;

  return (
    <div
      className="
        w-full
        bg-white dark:bg-[#0f172a]
        border border-blue-300 dark:border-blue-600/30
        rounded-2xl
        p-5
        flex flex-col
        transition-colors duration-300
      "
      style={{ minHeight: expanded ? "auto" : "260px" }}
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
        <h2 className="text-base font-semibold text-gray-900 dark:text-white">
          {task.title}
        </h2>

        {/* Description (fixed height before expand) */}
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

        {/* Read more space (always reserved) */}
        <div style={{ minHeight: "20px" }}>
          {isLong && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="
                text-xs
                text-blue-600 hover:underline
                dark:text-blue-400
              "
            >
              {expanded ? "Show less" : "Read more"}
            </button>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 dark:border-gray-700/60 my-4"></div>

      {/* Action */}
      <div className="min-h-[44px] flex items-center">
        <button
          className="
            w-full
            bg-blue-600 hover:bg-blue-700
            dark:bg-blue-600 dark:hover:bg-blue-500
            text-white text-sm py-2.5 rounded-lg
            transition active:scale-95
          "
        >
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
