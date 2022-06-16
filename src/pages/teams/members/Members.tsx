import Member from "./Member";
import CreateButton from "../CreateButton";
import { useSelector, useDispatch } from "react-redux";
import { memberSliceActions } from "../../../store/members-slice";
import { fetchMembersData } from "../../../store/members-slice";
import { useEffect } from "react";

import classes from './Members.module.css'
import { MembersProps } from "../../../types/types";

const Members: React.FC<MembersProps> = (props) => {

    const members = useSelector((state: any) => state.members.members)
    const selectedTeam = useSelector((state: any) => state.teams.selectedTeam)

    const disable = !selectedTeam ? true : false

    const dispatch = useDispatch()

    useEffect(() => {
        if (selectedTeam) {
            dispatch(fetchMembersData(selectedTeam.id))
        } else {
            dispatch(fetchMembersData())
        }
    }, [selectedTeam, dispatch])



    const selectMemberHandler = (member) => {
        dispatch(memberSliceActions.selectMember(member))
    }

    
    return (
        <section className={classes.containerMembers}>
            <span className={classes.spanText}>Members</span>
            <CreateButton title='Member' clickhandler={props.modalMemberClick} disable={disable}/>
            <div className={classes.members}>
                {members.map(member => (
                    <Member avatar={member.avatar}
                        selectMember={selectMemberHandler}
                        modalDelete={props.modalDelete}
                        title='Member'
                        name={member.name}
                        key={member.id}
                        member={member} />
                ))}
            </div>
        </section>
    )
}

export default Members;