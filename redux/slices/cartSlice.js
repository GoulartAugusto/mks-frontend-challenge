import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addItem:(state, action) => {
          const newItem = action.payload
          const existingItem = state.cartItems.find(
              (item) => item.id === newItem.id
          );
          state.totalQuantity++
  
          if (!existingItem) {
              state.cartItems.push({
                  id: newItem.id,
                  name: newItem.name,
                  photo: newItem.photo,
                  price: newItem.price,
                  quantity: 1,
                  totalPrice: newItem.price
              })
          } else {
              existingItem.quantity++
              existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
          }
          
          state.totalAmount = state.cartItems.reduce((total, item) => total +
          Number(item.price) * Number(item.quantity),0
          );
      },
      incrementItem: (state, action) => {
        const id = action.payload
        const existingItem = state.cartItems.find(
            (item) => item.id === id
        )
        state.totalQuantity++
        existingItem.quantity++
        existingItem.totalPrice = Number(existingItem.totalPrice) + Number(existingItem.price)
        state.totalAmount = state.cartItems.reduce((total, item) => total +
            Number(item.price) * Number(item.quantity), 0
        )
      },
      decrementItem: (state, action) => {
        const id = action.payload
        const existingItem = state.cartItems.find(
            (item) => item.id === id
        )
        if (existingItem.quantity > 1) {
            state.totalQuantity--
            existingItem.quantity--
            existingItem.totalPrice = Number(existingItem.totalPrice) - Number(existingItem.price)
        }
        state.totalAmount = state.cartItems.reduce((total, item) => total +
            Number(item.price) * Number(item.quantity), 0
        )
      },
      deleteItem: (state, action) => {
        const id = action.payload
        const existingItem = state.cartItems.find(item => item.id === id)
    
        if(existingItem) {
            state.cartItems = state.cartItems.filter(item => item.id !== id )
            state.totalQuantity = state.totalQuantity - existingItem.quantity
        }
    
        state.totalAmount = state.cartItems.reduce((total, item) => total +
        Number(item.price) * Number(item.quantity),0
        );
      },
      finishBuy: (state, action) => {
        const cart = action.payload
        const finishCart = state.cartItems.find(item => item.id === cart)
        if (state.cartItems.length > 0) {
            state.cartItems = []
            state.totalAmount = 0
            state.totalQuantity = 0
        }
      }

    },
 
});

export const cartActions = cartSlice.actions

export default cartSlice.reducer
