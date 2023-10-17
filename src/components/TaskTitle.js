import React from 'react';

export default function TaskTitle({task}) {
  return (
    <div className="col-11">
                <span className = "form-control bg-white btn mt-2"
                style={{textAlign: "left", fontWeight: "bold"}}>
                    {task.title}
                </span>
            </div>
  );
}
