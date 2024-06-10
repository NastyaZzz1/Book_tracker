import React from 'react';
import style from './Want_books.module.css';
import Nav from './Nav';

const Books_read = () => {
  return (
    <div className={style.contentBook}>
      <Nav />
      <p>Книги, которые прочитали</p>
    </div>
  )
}

export default Books_read