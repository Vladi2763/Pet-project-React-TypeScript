import ReactDOM from 'react-dom';
import React from 'react';
import classes from './CreateMemberModal.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { createMember } from '../../../store/members-slice';

const CreateMemberModalPortal: any = (props) => {

    const dispatch = useDispatch()
    const selectedTeam = useSelector((state: any) => state.teams.selectedTeam)

    const [inputText, setInputText] = useState('')

    const inputHandler = (event: any) => {
        setInputText(event.target.value)
    }

    const createMemberHandler = (memberName: string) => {

        const data = {
            member: {
                avatar: 'http://placeimg.com/640/480/tech',
                createdAt: new Date().toJSON(),
                name: memberName
            },
            teamKey: {
                selectedTeam: selectedTeam.id
            }
        }

        dispatch(createMember(data))

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
                    <input onChange={inputHandler} value={inputText} placeholder='Enter member name'></input>
                    <button onClick={() => createMemberHandler(inputText)}>Create {props.title}</button>
                </div>
            </div>
        </div>
    )
}


const CreateMemberModal: React.FC<{ title: string, closeModal: (boolean) => void }> = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<CreateMemberModalPortal title={props.title} closeModal={props.closeModal} />, document.getElementById('modal') as HTMLElement)}
        </React.Fragment>
    )
}


export default CreateMemberModal;