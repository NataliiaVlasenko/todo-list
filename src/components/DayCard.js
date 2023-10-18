import React from "react";

export default function DayCard({ day }) {
  const cardColor = () => {
    let color = "pink";

    const storedList = JSON.parse(localStorage.getItem("localTasks"));
    console.log(storedList);
    console.log(day);

    storedList.forEach((element) => {
      if (day === element.date) {
        color = "green";
      }
    });

    return color;
  };

  return (
    <li
      className="card"
      style={{ width: "18rem", backgroundColor: `${cardColor()}` }}
    >
      <div className="card-body">{day}</div>
    </li>
  );
}
