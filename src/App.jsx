import { useState } from 'react';

function ToDoApp() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    if (taskText.trim()) {
      setTasks([...tasks, { text: taskText, completed: false }]);
      setTaskText('');
    }
  };

  const toggleTask = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="container h-screen p-4 mx-auto align-top bg-gradient-to-t from-teal-400 to-blue-500">
      <h1 className="text-2xl font-bold ">Today's Tasks</h1>
      <div className="flex mt-4">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className="flex-1 p-2 border border-gray-300"
          placeholder="Add a new task..."
        />
        <button
          onClick={addTask}
          className="p-2 ml-2 text-white bg-blue-500"
        >
          Add
        </button>
      </div>
      <ul className="mt-4">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`flex justify-between items-center p-2 ${
              task.completed ? 'line-through' : ''
            }`}
          >
            <span onClick={() => toggleTask(index)}>{task.text}</span>
            <button
              onClick={() => deleteTask(index)}
              className="text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoApp;
