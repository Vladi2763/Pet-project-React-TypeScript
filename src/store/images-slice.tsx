import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    'boots',
    'comfort',
    'converse',
    'flipflop',
    'monkstrap',
    'oxford',
    'sneakers',
    'tech'
  ],
  selectedImage: 'boots'
}


const imagesSlice = createSlice({
  name: 'images',
  initialState: initialState,
  reducers: {
    
    addImages(state, action) {
      state.items = action.payload;
    },

    addSrc(state, actions) {
      state.selectedImage = actions.payload;
    }
  }
});




export const imagesSliceActions = imagesSlice.actions;

export default imagesSlice;