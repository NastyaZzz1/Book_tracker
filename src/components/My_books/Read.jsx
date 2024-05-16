import React from 'react';
import style from './Want_books.module.css';
import { Link } from 'react-router-dom';

const Books_read = () => {
  return (
    <div className={style.contentBook}>
      <h1>Мои книги</h1>
      <nav>
        <ul>
          <Link to="/Want_books">Хочу прочитать</Link>
        </ul>
        <ul>
          <Link to='/Reading'>Читаю сейчас</Link>
        </ul>
        <ul>
          <Link to="/Read">Прочитано</Link>
        </ul>
      </nav>
      <p>Книги, которые прочитали</p>
    </div>
  )
}

export default Books_read