import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  productData: [],
  userInfos: null,
  value: 1,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      const item = state.productData.find((item) => item._id === action.payload._id)
      if(item){
        item.quantity += action.payload.quantity
      }
      else{
        state.productData.push(action.payload) 
      }
      
    },
  }, 
})


export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer