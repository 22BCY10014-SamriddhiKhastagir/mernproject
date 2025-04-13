import { useState } from "react";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), title: input, status: "todo" }]);
    setInput("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Task List</h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 mr-2 rounded"
          placeholder="New task"
        />
        <button onClick={addTask} className="bg-blue-600 text-white px-4 py-2 rounded">Add</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="bg-gray-100 p-2 mb-2 flex justify-between">
            <span>{task.title}</span>
            <button onClick={() => deleteTask(task.id)} className="text-red-600">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
