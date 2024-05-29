import React, { SubmitHandler, useState } from 'react';
import { useForm } from 'react-hook-form';
import style from './AuthModal.module.css';
import Modal from 'react-modal';
import deletion from '../../assets/img/deletion.svg';
import back from '../../assets/img/back.svg';


const AuthModal = () => {
    const [modalIsOpen1, setModalIsOpen1] = useState(false);
    const openModal1 = () => {
        setModalIsOpen1(true);
    };
    const closeModal1 = () => {
        setModalIsOpen1(false);
    };

    const [modalIsOpen2, setModalIsOpen2] = useState(false);
    const openModal2 = () => {
        setModalIsOpen2(true);
    };
    const closeModal2 = () => {
        setModalIsOpen2(false);
    };

    const [modalIsOpen3, setModalIsOpen3] = useState(false);
    const openModal3 = () => {
        setModalIsOpen3(true);
    };
    const closeModal3 = () => {
        setModalIsOpen3(false);
    };


    const{register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
    

    const modalContent_1 = (
        <div>
            <input onClick={closeModal1} type="image" src={deletion}></input>
            <h2>Войти</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('login', {required: true})}/>
                <br />
                <button type="submit" 
                    onClick={() => {
                        openModal2();
                        closeModal1();
                      }}>
                    Продолжить
                </button>
            </form>
        </div>
    );

    const modalContent_2 = (
        <div>
            <input type="image"
                src={back}
                onClick={() => {
                    openModal1();
                    closeModal2();
                }}>
            </input>
            <input onClick={closeModal2} type="image" src={deletion}></input>
            <h2>Регистрация</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Имя
                    <br />
                    <input {...register('name', {required: true})}/>
                </label>
                <br />
                <label>
                    Электронная почта
                    <br />
                    <input type="email" {...register('email', {required: true})} />
                </label>
                <br />
                <label>
                    Придумайте пароль
                    <br />
                    <input type="password" {...register('password', {required: true})}/>
                </label>
                <br />
                <button type="submit"
                    onClick={() => {
                        openModal3();
                        closeModal2();
                    }}>
                    Зарегистрироваться
                </button>
            </form>
        </div>
    );

    const modalContent_3 = (
        <div>
            <input type="image"
                src={back}
                onClick={() => {
                    openModal2();
                    closeModal3();
                }}>
            </input>
            <input onClick={closeModal3} type="image" src={deletion}></input>
            <h2>Ввести пароль</h2>
            <p>Введите пароль для</p>
            <form onSubmit={handleSubmit}>
                <input type="password" {...register('password', {required: true})} />
                <br />
                <button type="submit" onClick={closeModal3}>Войти</button>
            </form>
        </div>
    );


    return (
    <div>
        <button onClick={openModal1} className={style.button}>Войти</button>
        <Modal isOpen={modalIsOpen1} onRequestClose={closeModal1} className={style.contentAuth}>
            {modalContent_1}
        </Modal>
        <Modal isOpen={modalIsOpen2} onRequestClose={closeModal2} className={style.contentAuth}>
            {modalContent_2}
        </Modal>
        <Modal isOpen={modalIsOpen3} onRequestClose={closeModal3} className={style.contentAuth}>
            {modalContent_3}
        </Modal>
    </div>
    );
}

export default AuthModal;
