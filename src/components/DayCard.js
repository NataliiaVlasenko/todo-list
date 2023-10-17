import React from 'react';

export default function DayCard({key, day}) {

    let color = "pink";

  return (
    <li id = {key} className="card"  style={{width: "18rem", backgroundColor: `${color}`}}>
      <div className="card-body">

    {day}

  </div>
    </li>
  );
}

