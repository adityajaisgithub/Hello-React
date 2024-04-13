import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name:"Cart",
  initialState:{
    items:[]
  },
  reducers:{
    addItems:(state,action)=>{
         state.items.push(action.payload)
    },
    removeItems:(state,action)=>{
      state.items.pop()
    },
    clearItems:(state)=>{
      state.items.length = 0
    }
  }
})

export const {addItems,removeItems,clearItems} = cartSlice.actions; //it is used linking action and component  using useSelector

export default cartSlice.reducer; // it is used linking slice to store