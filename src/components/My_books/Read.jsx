import React, { useState } from 'react';
import style from './Want_books.module.css';
import { Link } from 'react-router-dom';

const Books_read = () => {
  const [style, setStyle] = useState("light");

  const changeStyle = () => {
    console.log("you just clicked");
    if (style !== "light") setStyle("light");
    else setStyle("dark");
  };

  // const styles = {
  //   background: "red",
  //   border: "5px solid #2E9AFF"  
  // };

  return (
    <div >
      <h1>Мои книги</h1>
      <nav>
        <ul>
          <Link onClick={changeStyle} to="/Want_books">Хочу прочитать</Link>
        </ul>
        <ul>
          <Link className={style} to='/Reading'>Читаю сейчас</Link>
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