import React, { useState } from "react";
import DeleteTaskButton from './DeleteTaskButton';
import TaskTitle from './TaskTitle';

export default function ToDo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    if (task) {
      const newTask = { id: new Date().getTime().toString(), title: task };
      setTasks([...tasks, newTask]);
      localStorage.setItem("localTasks", JSON.stringify([...tasks, newTask]));
      setTask("");
    }
  };

  const handleDelete = (task)=>{
    const deleted = tasks.filter((t)=>t.id !== task.id);
    setTasks(deleted);
    localStorage.setItem("localTasks", JSON.stringify(deleted))
}
 

const handleClear=()=>{
  setTasks([]);
  localStorage.removeItem("localTasks");
}

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
        <button className=" btn btn-primary form-control material-icons" onClick={addTask}>
          add
        </button>
      </div>

     
      <div className="badge badge-light">
        You have
        {!tasks.length
          ? " nothing to buy"
          : tasks.length === 1
          ? " 1 purchase"
          : tasks.length > 1
          ? ` ${tasks.length} purchases`
          : null}
      </div>

      {tasks.map((task) => (
        <React.Fragment key={task.id}>
          <TaskTitle task = {task}/>
          <DeleteTaskButton onClick = {()=>handleDelete(task)}/>
        </React.Fragment>
      ))}

{!tasks.length ? null:(
          <div>
              <button className= "btn btn-secondary  mt-4 mb-4" onClick={()=>handleClear()}>
                  Clear
              </button>
          </div>
      )}
    </div>
  );
}
