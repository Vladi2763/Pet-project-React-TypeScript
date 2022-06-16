import { createSlice } from "@reduxjs/toolkit";

const getTokenFromLocal = (): any => {
    return localStorage.getItem('token') || null
}

const getEmailFromLocal = (): any => {
    return localStorage.getItem('email') || null
}


type token = {
    token: string | null,
    email: string | null,
    // isLoggedIn: boolean
}

const initialState: token = {
    token: getTokenFromLocal(),
    email: getEmailFromLocal(),
    // isLoggedIn: false
}



const tokenSlice = createSlice({
    name: 'token',
    initialState: initialState,
    reducers: {
        addToken(state, action) {
            state.token = action.payload.idToken
            state.email = action.payload.email
            // state.isLoggedIn = !!state.token;
            localStorage.setItem('email', state.email || '')
            localStorage.setItem('token', state.token || '')
        },
        logout(state) {
            state.token = null;
            // state.isLoggedIn = false;
            localStorage.removeItem('token');
            localStorage.removeItem('email');
        }
    }
})

export const tokenSliceActions = tokenSlice.actions;

export default tokenSlice;