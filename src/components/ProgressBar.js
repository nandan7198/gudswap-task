import React from "react";

const ProgressBar = ({ units }) => {
  const progress = Math.round(units * 6.667);
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
              Task Progress
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-teal-600">
              {progress}%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-teal-200">
          <div
            style={{ width: `${progress}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
          ></div>
        </div>
        <div className="relative flex justify-between text-xs">
          <span
            className={`absolute left-0 transform -translate-x-1/2 -translate-y-1/2 px-1 py-0.5 rounded ${
              progress >= 0 ? "bg-teal-200 text-gray-700" : "text-gray-500"
            }`}
          >
            L0
          </span>
          <span
            className={`absolute left-1/3 transform -translate-x-1/2 -translate-y-1/2 px-1 py-0.5 rounded ${
              progress >= 33 ? "bg-teal-200 text-gray-700" : "text-gray-500"
            }`}
          >
            L1
          </span>
          <span
            className={`absolute left-2/3 transform -translate-x-1/2 -translate-y-1/2 px-1 py-0.5 rounded ${
              progress >= 66 ? "bg-teal-200 text-gray-700" : "text-gray-500"
            }`}
          >
            L2
          </span>
          <span
            className={`absolute right-0 transform translate-x-1/2 -translate-y-1/2 px-1 py-0.5 rounded ${
              progress >= 100 ? "bg-teal-200 text-gray-700" : "text-gray-500"
            }`}
          >
            L3
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
