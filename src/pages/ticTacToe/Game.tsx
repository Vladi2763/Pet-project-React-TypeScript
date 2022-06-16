import { Board } from './Board';
import gameLogic from '../../otherFunc/ticTacToe/gameLogis';
import { useSelector, useDispatch } from 'react-redux';
import { tictactoeSliceActions } from '../../store/tictactoe-slice';
import { Obj } from '../../otherFunc/ticTacToe/gameLogis'

import classes from './Game.module.css'

function Game() {

    const board = useSelector((state: any) => state.tictactoe.board)
    const isXnext = useSelector((state: any) => state.tictactoe.isXnext)
    const counter = useSelector((state: any) => state.tictactoe.counter)


    const dispatch = useDispatch()
    
    let gameOver: string | null | Obj = gameLogic(board) ? gameLogic(board).winner : gameLogic(board);
    const draw = counter === 9 && !gameOver ? 'Ничья' : ''

    let coordinates = gameLogic(board) ? dispatch(tictactoeSliceActions.setCoordinates({ a: gameLogic(board).a, b: gameLogic(board).b, c: gameLogic(board).c })) : '';

    let person: string;

    const onClickHandler = (id: number) => {
        if (board[id] || gameOver) {
            return
        }

        person = isXnext ? 'X' : 'O'

        dispatch(tictactoeSliceActions.setBoard({
            id: id,
            person: person
        }))

        dispatch(tictactoeSliceActions.setNext())
        dispatch(tictactoeSliceActions.countStep())
    }

    const onClearHandler = () => {
        dispatch(tictactoeSliceActions.clearBoard())
        dispatch(tictactoeSliceActions.clearCounter())
        dispatch(tictactoeSliceActions.clearCoordinates())
    }


    return (
        <div className={classes.container}>
            <button className={classes.button} onClick={onClearHandler}></button>
            <Board board={board} onClickHandler={onClickHandler} />
            {(!gameOver && !draw) && <p>{isXnext ? `Сейчас ходит: X` : `Сейчас ходит: O`}</p>}
            {(gameOver || draw) && <p>{draw ? draw : `Победил ${gameOver}`}</p>}
        </div>
    );
}

export default Game