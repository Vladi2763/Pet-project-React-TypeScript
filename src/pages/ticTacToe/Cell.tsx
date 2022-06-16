import { useSelector } from 'react-redux';
import classes from './Cell.module.css'

const Cell: React.FC<{ cell: string, onClickHandler: any, index: number }> = (props) => {

    let coordinateA = useSelector((state: any) => state.tictactoe.coordinateA)
    let coordinateB = useSelector((state: any) => state.tictactoe.coordinateB)
    let coordinateC = useSelector((state: any) => state.tictactoe.coordinateC)

    let classWinner = props.index === coordinateA || props.index === coordinateB || props.index === coordinateC;

    return (
        <div className={classes.cell + ' '+ (classWinner ? classes.winner : '') } onClick={props.onClickHandler}>{props.cell}</div>
    )
}

export default Cell;