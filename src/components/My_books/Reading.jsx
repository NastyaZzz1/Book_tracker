import React from 'react';
import style from './Want_books.module.css';
import Nav from './Nav';


const Books_reading = () => {
  return (
    <div className={style.contentBook}>
      <Nav />
      <p>Книги, которые читают сейчас</p>
    </div>
  )
}

export default Books_reading