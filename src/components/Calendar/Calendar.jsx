import React, { useState } from 'react';
import style from './Calendar.module.css';
import { Calendar, formatDate } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className={style.contentCalendar}>
      <h1>Календарь</h1>
      <div className={style.wholeCal}>
        <div className={style.mainPart}>
            <Calendar onChange={setDate} value={date} locale={"en-US"} />
            <p>Моя цель <input type="number" min="0" max="1000"></input> стр. в день</p>
        </div>
        <div className={style.infoPart}>
          <div className={style.dateActive}>
            <p>{date.toLocaleString('en-US', {day: 'numeric'})}</p>
            <p>{date.toLocaleString('en-US', {weekday: 'long'})}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCalendar;
