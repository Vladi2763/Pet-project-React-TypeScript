import React from "react";
import classes from './Member.module.css'
import { deleteMember } from "../../../store/members-slice";
import { useSelector } from "react-redux";
import { DeleteHandlerOptions, MemberProps } from "../../../types/types";


const Member: React.FC<MemberProps> = (props) => {


    const selectedTeam = useSelector((state: any) => state.teams.selectedTeam)
    const selectedMember = useSelector((state: any) => state.members.selectedMember)
    const avatar = `${props.avatar}?ts=${new Date().getTime() + Math.random()}`
   

    const options: DeleteHandlerOptions = {
        title: props.title,
        name: props.name,
        id: selectedTeam ? selectedTeam.id : null,
        func: () => deleteMember,
        memberId: props.member.id
    }

    return (
        <div onClick={() => props.selectMember(props.member)} className={classes.member + ' ' + (selectedMember ? (selectedMember.id === props.member.id ? classes.highlight : '') : '')}>
            <div className={classes.memberContainer}>
                <img src={avatar} alt=''></img>
                <span className={classes.span}>{props.name}</span>
            </div>
            <button className={classes.buttonDeleteMember + ' ' + `buttonDelete${props.title}`} onClick={() => props.modalDelete(options)} />
        </div>
    )
}

export default Member;