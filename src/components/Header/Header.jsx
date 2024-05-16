import style from './Header.module.css';
import React from 'react';
import catalog from '../../assets/img/catalog.svg';
import calendar from '../../assets/img/calendar.svg';
import my_books from '../../assets/img/my_books.svg';
import logo from '../../assets/img/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div className={style.header}>
            <img src={logo} className={style.logo} />
            <nav>
                <ul>
                    <img src={catalog} className={style.img}/>
                    <Link to='/'>Каталог</Link>
                </ul>
                <ul>
                    <img src={calendar} className={style.img}/>
                    <Link to='/Calendar'>Календарь</Link>
                </ul>
                <ul>
                    <img src={my_books} className={style.img}/>
                    <Link to='/Want_books'>Мои книги</Link>
                </ul>
                <button className={style.button}>Войти</button>
            </nav>
        </div>
    );
}

export default Header;