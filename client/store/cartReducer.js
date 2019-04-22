import axios from 'axios'

// action types
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const INCREASE_QUANTITY = 'INCREASE_QUANTITY'
const DECREASE_QUANTITY = 'DECREASE_QUANTITY'
const GET_TOTAL = 'GET_TOTAL'

// action creators
export const addToCart = (id) => ({
  type: ADD_TO_CART,
  id
})

export const increaseQuantity = id => ({
  type: INCREASE_QUANTITY,
  id
})

export const decreaseQuantity = id => ({
  type: DECREASE_QUANTITY,
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
  cart: [],
  total: 0
}

const cartReducer = (state=initialState, action) => {
  switch(action.type) {
      case ADD_TO_CART: {
          return null
      }
      case REMOVE_FROM_CART: {
          return null
      }
      case INCREASE_QUANTITY: {
          return null
      }
      case DECREASE_QUANTITY: {
          return null
      }
      case GET_TOTAL:
        return null
      default: {
          return state
      }
  }
}

export default cartReducer
