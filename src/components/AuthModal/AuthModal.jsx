import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import style from './AuthModal.module.css';
import Modal from 'react-modal';
import axios from 'axios';
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

    const [step, setStep] = useState(1);
    const [user_index, setIndex] = useState();
    const [users, setUser] = useState([]);

    const{
        register,
        setError,
        formState: { errors }, 
        handleSubmit
    } = useForm({
        mode: "onBlur"
    });


    const fetchItems = async () => {
        try{
            const res = await axios.get('https://66336d32f7d50bbd9b495a65.mockapi.io/users');
            setUser(res.data);
        } catch (error){
            console.log(error);
        }
    }
 
    useEffect(() => {
        fetchItems();
    }, []);

    const onSubmit = (data) => {
        console.log(data);
        let marker = false
        if (step === 1){
            {users.map((user, index) => {
                if(user.login === data.login){
                    marker = true;
                    setIndex(index);
                }
            })}
            if (marker){
                setStep(3);
            } else {
                setStep(2);
            }
        } else if (step === 2){
            axios.post('https://66336d32f7d50bbd9b495a65.mockapi.io/users', data
            ).then((res) => {
                console.log(res.data);
                fetchItems();
            });
            closeModal1();
        } else {
            if(data.password === users[user_index].password){
                closeModal1();
            } else {
                setError('password', {
                    type: "server",
                    message: "Неверный пароль",
                })
            }
        }
    }


    return (
    <div>
        <button onClick={openModal1} className={style.mainButton}>Войти</button>
        <Modal isOpen={modalIsOpen1} onRequestClose={closeModal1} className={style.contentAuth}>
            <input
                className={style.deletionButton} 
                onClick={closeModal1} 
                type="image" 
                src={deletion}>
            </input>
            <form onSubmit={handleSubmit(onSubmit)}>
                {step === 1 && (
                    <>
                        <h2>Войти</h2>
                        <input 
                            placeholder="Введите логин"
                            {...register('login', {
                                required: "Поле обязательно к заполнению!",
                            })}/>
                        <div>
                            {errors?.login && <p>{errors?.login?.message}</p>}
                        </div>
                        <button type="submit" className={style.button}>
                            Продолжить
                        </button>
                    </>
                )}
                {step === 2 && (
                    <>
                        <input type="image"
                            className={style.backButton}
                            src={back}
                            onClick={() => {setStep(1)}}>
                        </input>
                        <h2>Регистрация</h2>
                        <p>Введите данные</p>
                        <label>
                            Электронная почта
                            <input type="email"
                            placeholder="supernastya@mail.ru"
                            {...register('email', {
                                required: "Поле обязательно к заполнению!",
                            })} />
                        </label>
                        <div>
                            {errors?.email && <p>{errors?.email?.message}</p>}
                        </div>
                        <label>
                            Пароль
                            <input type="password" {...register('password', {
                                required: "Поле обязательно к заполнению!",
                                minLength: {
                                    value: 5,
                                    message: "Минимум 5 символов",
                                }
                            })}/>
                        </label>
                        <div>
                            {errors?.password && <p>{errors?.password?.message}</p>}
                        </div>
                        <button type="submit" className={style.button}>
                            Зарегистрироваться
                        </button>
                    </>
                )}
                {step === 3 && (
                    <>
                        <input type="image"
                            className={style.backButton}
                            src={back}
                            onClick={() => {setStep(1)}}>
                        </input>
                        <h2>Ввести пароль</h2>
                        <input type="password" {...register('password', {
                            required: "Поле обязательно к заполнению!",
                        })} />
                        <div>
                            {errors?.password && <p>{errors?.password?.message}</p>}
                        </div>
                        <button type="submit" className={style.button}>
                            Войти
                        </button>
                    </>
                )} 
            </form>
        </Modal>
    </div>
    ); 
}

export default AuthModal;
