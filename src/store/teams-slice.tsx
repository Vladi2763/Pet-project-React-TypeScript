import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Requests from '../otherFunc/teamsFunctions/firebaseRequests'

import { TeamsType } from '../types/types'

export const fetchTeamsData: any = createAsyncThunk(
    'teams/fetchTeamsData',
    async function (_, { rejectWithValue }) {
        try {
            const response = await Requests.getTeams();

            return response;
        }
        catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
)

export const createTeam: any = createAsyncThunk(
    'teams/createTeam',
    async function (team, { rejectWithValue }) {
        try {
            const response = await Requests.createTeam(team);

            return response;
        }
        catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
)

export const deleteTeam: any = createAsyncThunk(
    'teams/deleteTeam',
    async function (data, { rejectWithValue, dispatch }) {
        try {
            const response = await Requests.deleteTeam(data);

            dispatch(teamsSliceActions.selectTeam(null))

            return data;
        }
        catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
)

const initialState: TeamsType = {
    teams: [],
    selectedTeam: null,
    loading: false,
    error: null
}

const teamsSlice = createSlice({
    name: 'teams',
    initialState: initialState,
    reducers: {
        selectTeam(state, action) {
            state.selectedTeam = action.payload;
        }
    },
    extraReducers: {
        [fetchTeamsData.penging]: (state) => {
            state.loading = true;
        },
        [fetchTeamsData.fulfilled]: (state, action) => {
            state.loading = false;
            state.teams = action.payload;
        },
        [fetchTeamsData.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.teams = [];
        },
        [createTeam.fulfilled]: (state, action) => {
            state.teams.push(action.payload)
        },
        [createTeam.rejected]: (state, action) => {
            state.error = action.payload;
        },
        [deleteTeam.fulfilled]: (state, action) => {
            state.teams = state.teams.filter(item => item.id !== action.payload.teamId)
        },
        [deleteTeam.rejected]: (state, action) => {
            state.error = action.payload;
        }
    }
})

export const teamsSliceActions = teamsSlice.actions

export default teamsSlice