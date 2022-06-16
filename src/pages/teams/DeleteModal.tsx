import ReactDOM from 'react-dom';
import React from 'react';

import { useDispatch } from 'react-redux'
import classes from './DeleteModal.module.css'
import { DeleteModalProps } from '../../types/types';

const DeleteModalPortal: React.FC<DeleteModalProps> = (props) => {
    const dispatch = useDispatch()


    const deleteHandler = (data: any, func: (data: any) => any) => {
        dispatch(func(data));
        props.closeModal(false)
    }

    const closeModalHandler = () => {
        props.closeModal(false)
    }

    return (
        <div className={classes.modalUnderlay}>
            <div id='deleteModal' className={classes.modalWindow}>
                <div className={classes.modalWindowHeader}>
                    <span className={classes.modalWindowHeaderSpan}>Delete {props.title}</span>
                    <img onClick={closeModalHandler} className={classes.modalWindowClose} alt=''></img>
                </div>
                <div className={classes.modalWindowMain}>
                    <span className={classes.modalWindowMainSpan}>Are you sure you want to delete {props.title}: {props.name}</span>
                    <button onClick={() => deleteHandler(props.data, props.func)} className={classes.modalWindowButton}>Delete</button>
                </div>
            </div>
        </div>
    )
}

const DeleteModal: React.FC<{ title: string; name: string; func: (id: string) => any; closeModal: (boolean) => any; data: any; }> = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<DeleteModalPortal title={props.title} name={props.name} func={props.func} closeModal={props.closeModal} data={props.data} />, document.getElementById('modal') as HTMLElement)}
        </React.Fragment>
    )
}

export default DeleteModal