import style from './Header.module.css';
import React, { useEffect } from 'react';
import catalog from '../../assets/img/catalog.svg';
import calendar from '../../assets/img/calendar.svg';
import my_books from '../../assets/img/my_books.svg';
import logo from '../../assets/img/logo.svg';
import { Link } from 'react-router-dom';
import AuthModal from '../AuthModal/AuthModal';



const Header = () => {
    useEffect(() => {
        const yourbuttons = Array.from(
          document.getElementsByClassName('highlightHover')
        );
        for (var i = yourbuttons.length - 1; i >= 0; i--) {
            var currentbtn;
            yourbuttons[i].onclick=function(){
            if(currentbtn){
                currentbtn.classList.remove("highlight");
            }
            this.classList.add("highlight");
            currentbtn=this;
            }
        };
    }, []);


    return(
        <>
        <style>{`
            .highlight {
                background-color: #D3EFFF;
                border-radius: 3px;
            }`}
        </style>
        <div className={style.header}>
            <img src={logo} className={style.logo} />
            <nav>
                <ul>
                    <img src={catalog} className={style.img}/>
                    <Link className="highlightHover" to='/'>Каталог</Link>
                </ul>
                <ul>
                    <img src={calendar} className={style.img}/>
                    <Link className="highlightHover" to='/Calendar'>Календарь</Link>
                </ul>
                <ul>
                    <img src={my_books} className={style.img}/>
                    <Link className="highlightHover" to='/Want_books'>Мои книги</Link>
                </ul>
                <AuthModal />
            </nav>
        </div>
        </>
    );
} 

export default Header;