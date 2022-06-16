import classes from './Navigation.module.css'
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { tokenSliceActions } from '../store/token-slice'
import { useState } from 'react'

const Navigation = () => {

    const dispatch = useDispatch();
    const [isClicked, setIsClicked] = useState(false)
    const email = useSelector((state: any) => state.token.email)

    const logoutHandler = () => {
        dispatch(tokenSliceActions.logout())
    }

    const documentClickHandler = (event: any) => {
        if (event.target !== document.getElementById('menu')) {
            setIsClicked(false)
            document.removeEventListener('click', documentClickHandler);
        }
    }


    const menuClickHandler = (event: any) => {
        event.stopPropagation()
        setIsClicked(prevState => !prevState)
        if (!isClicked) {
            document.addEventListener('click', documentClickHandler);
        }
    }

    return (
        <div className={classes.header}>
            <nav className={classes.nav}>
                <div className={classes.container}>
                    <div className={classes.linkContainer}>
                        <NavLink className={(navData) => navData.isActive ? classes.active : classes.nonActive} to='/grid'>Grid</NavLink>
                    </div>
                    <div className={classes.linkContainer}>
                        <NavLink className={(navData) => navData.isActive ? classes.active : classes.nonActive} to='/teams' >Teams</NavLink>
                    </div>
                    <div className={classes.linkContainer}>
                        <NavLink className={(navData) => navData.isActive ? classes.active : classes.nonActive} to='/tictactoe' >TicTacToe</NavLink>
                    </div>
                    <div className={classes.linkContainer}>
                        <NavLink className={(navData) => navData.isActive ? classes.active : classes.nonActive} to='/About' >About me</NavLink>
                    </div>
                </div>
                <div id='menu' className={classes.email} onClick={menuClickHandler}>
                    <div >
                        {email}
                    </div>
                    <div className={isClicked ? classes.arrowActive : classes.arrow}>
                    </div>
                </div>
            </nav>
            {isClicked && <div className={classes.menu}><Link to='/' onClick={logoutHandler}>Log Out</Link></div>}
        </div>
    )
}



export default Navigation