import { applyImageToCell } from '../otherFunc/applyImageToCell';

import { TemplatesSlice, GridRow } from "../types/types";
import { createSlice } from "@reduxjs/toolkit";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { getTemplates } from "../otherFunc/server";
import { makeGrid } from "../otherFunc/makeGrid";



export const fetchTemplatesData: any = createAsyncThunk(
  'templates/fetchTemplatesData',
  async function (_, { rejectWithValue }) {
    try {
      const response = await getTemplates();
      let grids = response.map((template: GridRow) => (
        makeGrid(template)))
      return grids;
    }

    catch (error: any) {
      return rejectWithValue(error.message)
    }

  }
)


const initialState: TemplatesSlice = {
  items: [],
  loading: false,
  originalSelectedTemplate: null,
  selectedTemplate: null,
  error: null,
  selectedGridIndex: null
}


const templatesSlice = createSlice({
  name: 'templates',
  initialState: initialState,
  reducers: {
    addOriginalTemplate(state, action) {
      state.selectedTemplate = action.payload
    },
    applyImageToCell(state, action) {

      state.selectedTemplate = applyImageToCell(state.selectedTemplate,
        { top: action.payload.cell.top, left: action.payload.cell.left },
        action.payload.selectedImage)
    },
    selectTemplate(state, action) {
      state.selectedTemplate = action.payload;
      state.originalSelectedTemplate = action.payload
    },
    selectIndex(state, action) {
      state.selectedGridIndex = action.payload;
    }
  },
  extraReducers: {
    [fetchTemplatesData.pending]: (state: TemplatesSlice) => {
      state.loading = true;
    },
    [fetchTemplatesData.fulfilled]: (state: TemplatesSlice, action: any) => {
      state.loading = false;
      state.items = action.payload;
    },
    [fetchTemplatesData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload
      state.items = []
    }
  }
})

export const templatesSliceActions = templatesSlice.actions;

export default templatesSlice;