import React from "react";
import DayCard from "./DayCard";

export default function DayList() {
  const dateFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const getNextSevenDays = () => {
    const result = [];
    const now = new Date();

    for (let i = 0; i < 7; i++) {
      result.push(
        new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() + i
        ).toLocaleDateString("ua-UA", dateFormatOptions)
      );
    }

    return result;
  };

  const days = getNextSevenDays();
  return (
    <ul className="container row">
      {days.map((day, index) => (
        <DayCard key={index} day={day}></DayCard>
      ))}
    </ul>
  );
}
