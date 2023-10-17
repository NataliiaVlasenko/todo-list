import React, { useState } from "react";
import DeleteTaskButton from "./DeleteTaskButton";
import TaskTitle from "./TaskTitle";
import Badge from "./Badge";

export default function ToDo() {
  
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const today = new Date();

  const dateFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };


  const addTask = (e) => {
    if (task) {
      const newTask = { id: today.getDate().toString, title: task , date: new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
      ).toLocaleDateString("ua-UA", dateFormatOptions)};

      setTasks([...tasks, newTask]);
      localStorage.setItem("localTasks", JSON.stringify([...tasks, newTask]));
      setTask("");
    }
  };

  const handleDelete = (task) => {
    const deleted = tasks.filter((t) => t.id !== task.id);
    setTasks(deleted);
    localStorage.setItem("localTasks", JSON.stringify(deleted));
  };

  const handleClear = () => {
    setTasks([]);
    localStorage.removeItem("localTasks");
  };

  return (
    <div className="container row">
      <h1 className="mt-3 text-white">Purchases list</h1>

      <div className="col-8">
        <input
          name="task"
          type="text"
          value={task}
          placeholder="Add your purchase"
          className="form-control"
          onChange={(e) => setTask(e.target.value)}
        />
      </div>

      <div className="col-3">
        <button
          className=" btn btn-primary form-control material-icons"
          onClick={addTask}
        >
          add
        </button>
      </div>

      <Badge tasks={tasks} />

      {tasks.map((task) => (
        <React.Fragment key={task.id}>
          <TaskTitle task={task} />
          <DeleteTaskButton onClick={() => handleDelete(task)} />
        </React.Fragment>
      ))}

      {!tasks.length ? null : (
        <div>
          <button
            className="btn btn-secondary  mt-4 mb-4"
            onClick={() => handleClear()}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}
