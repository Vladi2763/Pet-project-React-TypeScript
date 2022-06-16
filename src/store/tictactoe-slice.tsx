import { createSlice } from "@reduxjs/toolkit";

type board = {
    board: Array<string | null>,
    isXnext: boolean,
    counter: number,
    coordinateA: number | null,
    coordinateB: number | null,
    coordinateC: number | null
}

const initialState: board = {
    board: Array(9).fill(null),
    isXnext: true,
    counter: 0,
    coordinateA: null,
    coordinateB: null,
    coordinateC: null
}

const tictactoeSlice = createSlice({
    name: 'tictactoe',
    initialState: initialState,
    reducers: {
        setBoard(state, action) {
            let newBoard = [...state.board];
            newBoard[action.payload.id] = action.payload.person
            state.board = newBoard
        },
        setNext(state) {
            state.isXnext = !state.isXnext
        },
        clearBoard(state) {
            state.board = Array(9).fill(null)
        },
        countStep(state) {
            state.counter = state.counter + 1;
        },
        clearCounter(state) {
            state.counter = 0
        },
        setCoordinates(state, action) {
            state.coordinateA = action.payload.a;
            state.coordinateB = action.payload.b;
            state.coordinateC = action.payload.c
        },
        clearCoordinates(state) {
            state.coordinateA = null;
            state.coordinateB = null;
            state.coordinateC = null
        }
    }
})

export const tictactoeSliceActions = tictactoeSlice.actions

export default tictactoeSlice;