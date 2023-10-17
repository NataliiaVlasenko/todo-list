import React from 'react';
import DayList from '../../components/DayList';

export default function CalendarPage() {
  return (
    <div className="container border border-primary rounded mt-5" style={{background: 'URL(https://cdn.pixabay.com/photo/2014/09/24/16/28/bricks-459299_640.jpg)',
    backgroundSize: 'cover'}}>
      <DayList/>
    </div>
  );
}
