import classes from './Auth.module.css';
import React from 'react';
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { tokenSliceActions } from '../../store/token-slice';

import authRequest from './authRequest';

const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const Auth = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [isErrEmail, setIsErrEmail] = useState(false);
    const [isErrPass, setIsErrPass] = useState(false);
    const enteredEmail = useRef<HTMLInputElement>(null);
    const enteredPassword = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()

        const email = enteredEmail.current!.value;
        const password = enteredPassword.current!.value;

        if (password.length < 8) {
            setIsErrPass(true);
            return;
        }

        if(!email.match(mailFormat)) {
            setIsErrEmail(true)
            return;
        }

        authRequest(email, password, isLogin).then(data => {
            console.log(data)
        dispatch(tokenSliceActions.addToken({ idToken: data.idToken, email: data.email }))
        navigate('/grid')
        })

        setIsErrEmail(false)
        setIsErrPass(false);
    }

    const registrToggleHadler = () => {

        setIsLogin((prevState) => !prevState);
    }

    const emailFoucHandler =(event: any) => {
        if(event.target.value.match(mailFormat)) {
            setIsErrEmail(false)
        }
    }

    const emailBlurHandler =(event: any) => {
        if(!event.target.value.match(mailFormat)) {
            setIsErrEmail(true)
        } else {
            setIsErrEmail(false)
        }
    }

    const passFocusHandler = (event: any) => {
        if (event.target.value.trim().length > 8) {
            setIsErrPass(false);
        }
    }

    const passBlurHandler =(event: any) => {
        if (event.target.value.trim().length < 8) {
            setIsErrPass(true);
        } else {
            setIsErrPass(false)
        }
    }

    return (
        <div className={classes.content}>
            <h1>Welcome</h1>
            <section className={classes.auth}>
                <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
                <form onSubmit={submitHandler}>
                    <div className={classes.control}>
                        <label htmlFor='email'>Your Email</label>
                        <input ref={enteredEmail}
                        type='email'
                        id='email' required
                        onFocus={emailFoucHandler}
                        onBlur={emailBlurHandler}
                        value='test1@gmail.com'
                        />
                        {isErrEmail && <p>Ошибка! Введите корректный email</p>}
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='password'>Your Password</label>
                        <input ref={enteredPassword}
                        type='password'
                        id='password' required
                        onFocus={passFocusHandler}
                        onBlur={passBlurHandler}
                        value='12345678'/>
                        {isErrPass && <p>Ошибка! Пароль должен быть больше 8 символов</p>}
                    </div>
                    <div className={classes.actions}>
                        <button type='submit'>{isLogin ? 'Login' : 'Create account'}</button>
                        <button type='button' onClick={registrToggleHadler}>{isLogin ? 'Create account' : 'Login'}</button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Auth;