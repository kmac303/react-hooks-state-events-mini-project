import React from "react";
import Task from "./Task";
// import { v4 as uuid } from "uuid";

function TaskList({tasks, onDeleteTask}) {
  const renderTasks = tasks.map((task, index) => {
    // console.log(task.category);
    return (
      <Task key={index} text={task.text} category={task.category} onDeleteTask={onDeleteTask}/>
    )
  })
  return (
    <div className="tasks">
      {renderTasks}
    </div>
  );
}

export default TaskList;
