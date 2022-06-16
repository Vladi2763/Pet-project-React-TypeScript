import Teams from "./teams/Teams"
import Members from "./members/Members";
import classes from './TeamsPage.module.css'
import CreateTeamModal from "./teams/CreateTeamModal";
import CreateMemberModal from "./members/CreateMemberModal";
import DeleteModal from './DeleteModal'
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { fetchTeamsData } from "../../store/teams-slice";
import { DeleteHandler, DeleteHandlerOptions } from "../../types/types";

const TeamsPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTeamsData())
    }, [dispatch])

    const [isModalCreateTeamOpen, setIsModalCreateTeamOpen] = useState(false);
    const [titleTeamCreateModal, setTitleTeamCreateModal] = useState('');
    const [isModalCreateMemberOpen, setIsModalCreateMemberOpen] = useState(false);
    const [titleMemberCreateModal, setTitleMemberCreateModal] = useState('');


    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
    const [titleDeleteModal, setTitleDeleteModal] = useState('');
    const [nameInDeleteModal, setNameInDeleteModal] = useState('');
    const [funcDeleteModal, setFuncDeleteModal] = useState(null);
    const [dataDeleteModal, setDataDeleteModal] = useState({
        teamId: null,
        memberId: null
    })

    const documentTeamsCloseModalHandler = (event: any) => {

        if (event.target !== document.getElementById('buttonCreateModalTeam')) {
            if (event.target.closest('#modalCreate') !== document.getElementById('modalCreate')) {
                setIsModalCreateTeamOpen(false);
                document.removeEventListener('click', documentTeamsCloseModalHandler)
            }
        }
    }

    const documentMembersCloseModalHandler = (event: any) => {

        if (event.target !== document.getElementById('buttonCreateModalMember')) {
            if (event.target.closest('#modalCreate') !== document.getElementById('modalCreate')) {
                setIsModalCreateMemberOpen(false);
                document.removeEventListener('click', documentMembersCloseModalHandler)
            }
        }
    }

    const clickHandlerCreateTeamModal = (title: string) => {
        setIsModalCreateTeamOpen(true);
        setTitleTeamCreateModal(title);
        if (!isModalCreateTeamOpen) {
            document.addEventListener('click', documentTeamsCloseModalHandler);
        }
    }

    const clickHandlerCreateMemberModal = (title: string) => {
        setIsModalCreateMemberOpen(true);
        setTitleMemberCreateModal(title)
        if (!isModalCreateMemberOpen) {
            document.addEventListener('click', documentMembersCloseModalHandler);
        }
    }

    const documentCloseDeleteModalHandler = (event) => {
        if (event.target !== (event.target.closest('.buttonDeleteteam') || event.target.closest('.buttonDeleteMember'))) {
            if (event.target.closest('#deleteModal') !== document.getElementById('deleteModal')) {
                setIsModalDeleteOpen(false);
                document.removeEventListener('click', documentCloseDeleteModalHandler)
            }
        }
    }

    const deleteHandler: DeleteHandler = (options: DeleteHandlerOptions) => {
        setIsModalDeleteOpen(true);
        setTitleDeleteModal(options.title);
        setNameInDeleteModal(options.name);
        setFuncDeleteModal(options.func);
        setDataDeleteModal({
            teamId: options.id,
            memberId: options.memberId
        })

        if (!isModalDeleteOpen) {
            document.addEventListener('click', documentCloseDeleteModalHandler);
            console.log('ОБРАБОТЧИК ПОВЕШАН')
        }
    }

    return (
        <div className={classes.container}>
            <main className={classes.main}>
                <Teams modalClick={clickHandlerCreateTeamModal} modalDelete={deleteHandler} />
                <Members modalMemberClick={clickHandlerCreateMemberModal} modalDelete={deleteHandler} />
            </main>
            {isModalCreateTeamOpen && <CreateTeamModal title={titleTeamCreateModal} closeModal={setIsModalCreateTeamOpen} />}
            {isModalCreateMemberOpen && <CreateMemberModal title={titleMemberCreateModal} closeModal={setIsModalCreateMemberOpen} />}
            {isModalDeleteOpen && <DeleteModal
                title={titleDeleteModal}
                name={nameInDeleteModal}
                func={funcDeleteModal}
                closeModal={setIsModalDeleteOpen}
                data={dataDeleteModal} />}
        </div>
    )
}

export default TeamsPage