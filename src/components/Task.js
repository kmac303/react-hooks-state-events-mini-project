import React, { useState } from "react";

function Task({text, category}) {
  const [visible, setVisible] = useState(true);
  const removeElement = () => {
    setVisible((prev) => !prev);
  };
  if (visible) {
    return (
      <div className="task">
        <div className="label" onClick={removeElement}>{category}</div>
        <div className="text" onClick={removeElement}>{text}</div>
        <button className="delete" onClick={removeElement}>X</button>
      </div>
    );
  } else {
    return null;
  }
  
}

export default Task;
