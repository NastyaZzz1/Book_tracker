import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    useEffect(() => {
        const yourbuttons = Array.from(
          document.getElementsByClassName('highlightHoverChild')
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

    return (
    <>
    <style>{`
        .highlight {
            background-color: #D3EFFF;
            border-radius: 3px;
        }`}
    </style>
    <div>
        <h1>Мои книги</h1>
        <nav>
            <ul>
                <Link className="highlightHoverChild" to="/Want_books">Хочу прочитать</Link>
            </ul>
            <ul>
                <Link className="highlightHoverChild" to='/Reading'>Читаю сейчас</Link>
            </ul>
            <ul>
                <Link className="highlightHoverChild" to="/Read">Прочитано</Link>
            </ul>
        </nav>
    </div>
    </>
    );
};

export default Nav;
