import axios from 'axios'

// action types
const ADD_TO_CART = 'ADD_TO_CART'
const INCREASE_QUANTITY = 'INCREASE_QUANTITY'
const DECREASE_QUANTITY = 'DECREASE_QUANTITY'
const GET_TOTAL = 'GET_TOTAL'

// action creators
export const addToCart = (id) => ({
  type: ADD_TO_CART,
  id
})

export const increaseQuantity = id => ({
  type: INCREASE_QUANITY,
  id
})

export const decreaseQuantity = id => ({
  type: DECREASE_QUANITY,
  id
})

// thunks
export const addToCartThunk = () => {

}

export const removeFromCartThunk = () => {

}

export const increaseQuantityThunk = () => {

}

export const decreaseQuantityThunk = () => {

}

const initialState = {
  cart: []
}

const cartReducer = (state=initialState, action) {

}

export default cartReducer
