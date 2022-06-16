import { configureStore } from "@reduxjs/toolkit";

import imagesSlice from "./images-slice";
import templatesSlice from "./templates-slice";
import tokenSlice from "./token-slice";
import teamsSlice from "./teams-slice";
import membersSlice from "./members-slice";
import tictactoeSlice from "./tictactoe-slice";


const store = configureStore({
    reducer: {
        images: imagesSlice.reducer,
        templates: templatesSlice.reducer,
        token: tokenSlice.reducer,
        teams: teamsSlice.reducer,
        members: membersSlice.reducer,
        tictactoe: tictactoeSlice.reducer
    }
})

export default store;