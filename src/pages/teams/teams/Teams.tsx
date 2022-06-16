import { useDispatch, useSelector } from "react-redux";
import CreateButton from "../CreateButton";
import Team from "./Team";
import { TeamType, TeamsProps } from "../../../types/types";
import classes from './Teams.module.css'
import { teamsSliceActions } from "../../../store/teams-slice";


const Teams: React.FC<TeamsProps> = (props) => {

    const dispatch = useDispatch()

    const teams = useSelector((state: any) => state.teams.teams);

    const selectTeamHandler = (team: TeamType) => {
        dispatch(teamsSliceActions.selectTeam(team))
    }

    return (
        <section className={classes.containerTeams}>
            <span className={classes.spanTeams}>Teams</span>
            <CreateButton title='Team' clickhandler={props.modalClick} disable={false}/>
            <div className={classes.teams}>
                {teams.map((team: TeamType) => (
                    <Team selectTeam={selectTeamHandler}
                        modalDelete={props.modalDelete}
                        title='team'
                        team={team}
                        key={team.id}
                        id={team.id}></Team>
                ))}
            </div>
        </section>
    )
}

export default Teams;