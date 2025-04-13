// components/TaskCard.jsx
import React from "react";
import { CheckCircle, Clock, User } from "lucide-react";

export default function TaskCard({ task }) {
  return (
    <div className="bg-white shadow-md rounded-md p-4 border-l-4 border-blue-500 mb-3">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{task.title}</h3>
        {task.completed && <CheckCircle className="text-green-500" />}
      </div>
      <p className="text-gray-600 text-sm mb-1">{task.description}</p>
      <div className="flex items-center text-sm text-gray-500 mt-2 space-x-4">
        <span className="flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          {task.dueDate}
        </span>
        <span className="flex items-center">
          <User className="w-4 h-4 mr-1" />
          {task.assignedTo}
        </span>
      </div>
    </div>
  );
}
