import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import style from './My_books.module.css';


const Nav = () => {
    useEffect(() => {
        const yourbuttons = Array.from(
          document.getElementsByClassName('highlightHoverChild')
        );
        var currentbtn = document.getElementsByClassName('highlightHoverChild highlight')[0];
        for (var i = yourbuttons.length - 1; i >= 0; i--) {
            console.log(currentbtn);
            yourbuttons[i].onclick=function(){
            if(currentbtn){
                currentbtn.classList.remove("highlight");
            }
            this.classList.add("highlight");
            currentbtn=this;
            }
        };
    }, []);

    return (
    <>
    <style>{`
        .highlight {
            background-color: #D3EFFF;
            border-radius: 3px;
        }`}
    </style>
    <div className={style.contentBook}>
        <h1>Мои книги</h1>
        <nav>
            <ul>
                <Link className="highlightHoverChild highlight" to="/my_books/want_books">Хочу прочитать</Link>
            </ul>
            <ul>
                <Link className="highlightHoverChild" to='/my_books/reading'>Читаю сейчас</Link>
            </ul>
            <ul>
                <Link className="highlightHoverChild" to="/my_books/read">Прочитано</Link>
            </ul>
        </nav>
        <Outlet />
    </div>
    </>
    );
};

export default Nav;
