import { createTeam } from '../../../store/teams-slice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import classes from './CreateTeamModal.module.css'

const CreateTeamModalPortal: any = (props) => {

    const dispatch = useDispatch()

    const [inputText, setInputText] = useState('')

    const inputHandler = (event: any) => {
        setInputText(event.target.value)
    }

    const createTeamHandler = (teamName: string) => {

        const team = {
            avatar: 'http://placeimg.com/640/480/tech',
            createdAt: new Date().toJSON(),
            name: teamName
        }

        dispatch(createTeam(team))

        props.closeModal(false)
    }

    const closeModalHandler = () => {
        props.closeModal(false)
    }

    return (
        <div className={classes.modalUnderlay}>
            <div id='modalCreate' className={classes.modalWindow}>
                <div className={classes.modalWindowHeader}>
                    <span>New {props.title}</span>
                    <img onClick={closeModalHandler} alt=''></img>
                </div>
                <div className={classes.modalWindowMain}>
                    <span>{props.title} name</span>
                    <input onChange={inputHandler} value={inputText} placeholder='Enter team name'></input>
                    <button onClick={() => createTeamHandler(inputText)}>Create {props.title}</button>
                </div>
            </div>
        </div>
    )
}


const CreateTeamModal: React.FC<{ title: string, closeModal: (boolean) => void}> = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<CreateTeamModalPortal title={props.title} closeModal={props.closeModal} />, document.getElementById('modal') as HTMLElement)}
        </React.Fragment>
    )
}


export default CreateTeamModal;