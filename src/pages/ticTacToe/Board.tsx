import classes from './Board.module.css'

import Cell from './Cell'

export const Board: React.FC<{ board: string[], onClickHandler:any }> = (props) => {
    return (
        <div className={classes.board}>
            {props.board.map((cell: string, index: number) => (
                <Cell key={index} cell={cell} index={index} onClickHandler={() => props.onClickHandler(index)}></Cell>
            ))}
        </div>
    )
}