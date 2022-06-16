import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import Requests from "../otherFunc/teamsFunctions/firebaseRequests";


export const fetchMembersData: any = createAsyncThunk(
    'members/fetchMembersData',
    async function (teamKey, { rejectWithValue }) {
        try {
            const response = await Requests.getMembers(teamKey);

            return response;
        }
        catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
)

export const createMember: any = createAsyncThunk(
    'members/createMember',
    async function (data, { rejectWithValue }) {
        try {
            const response = await Requests.addMember(data);

            return response;
        }
        catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
)

export const deleteMember: any = createAsyncThunk(
    'members/deleteMember',
    async function (data, { rejectWithValue }) {
        try {
            const response = await Requests.deleteMember(data);

            return data;
        }
        catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
)

const initialState = {
    members: [],
    selectedMember: null,
    loading: false,
    error: null
}

const membersSlice = createSlice({
    name: 'members',
    initialState: initialState,
    reducers: {
        selectMember(state, action) {
            state.selectedMember = action.payload;
        }
    },
    extraReducers: {
        [fetchMembersData.pending]: (state) => {
            state.loading = true;
        },
        [fetchMembersData.fulfilled]: (state, action) => {
            state.loading = false;
            state.members = action.payload;
        },
        [fetchMembersData.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.members = [];
        },
        [createMember.penging]: (state) => {
            state.loading = true;
        },
        [createMember.fulfilled]: (state, action) => {
            state.loading = false;
            state.members.push(action.payload);
        },
        [createMember.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [deleteMember.fulfilled]: (state, action) => {
            state.members = state.members.filter(item => item.id !== action.payload.memberId)
        },
        [deleteMember.rejected]: (state, action) => {
            state.error = action.payload;
        }
    }
})

export const memberSliceActions = membersSlice.actions;

export default membersSlice;