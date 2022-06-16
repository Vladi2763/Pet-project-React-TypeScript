import { useSelector } from "react-redux";
import { DeleteHandlerOptions, TeamProps } from "../../../types/types";
import classes from './Team.module.css'
import { deleteTeam } from "../../../store/teams-slice";

const Team: React.FC<TeamProps> = (props) => {

    const selectedTeam = useSelector((state: any) => state.teams.selectedTeam)
    const selectedMember = null

    const date =new Date(props.team.createdAt).toLocaleDateString()
    const avatar = `${props.team.avatar}?ts=${new Date().getTime() + Math.random()}`

    const options: DeleteHandlerOptions = {
        title: props.title,
        name: props.team.name,
        id: props.id,
        func: () => deleteTeam,
        memberId: selectedMember
    }

    return (
        <div onClick={() => props.selectTeam(props.team)} className={classes.team + ' ' + (selectedTeam ? (selectedTeam.id === props.team.id ? classes.highlight : '') : '')}>
            <div className={classes.memberContainer}>
                <img src={avatar} className={classes.imageTeam} alt=''></img>
                <div className={classes.containerText}>
                    <span className={classes.teamName}>{props.team.name}</span>
                    <div className={classes.dateCreating}>
                        <span>Created at</span>
                        <span>{date}</span>
                    </div>
                </div>
            </div>
            <button className={classes.buttonDeleteTeam + ' ' + `buttonDelete${props.title}`} onClick={() => props.modalDelete(options)}></button>
        </div>
    )
}

export default Team;