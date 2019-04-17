import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const SET_CART = 'SET_CART'
const UPDATE_CART = 'UPDATE_CART'
const REMOVE_CART = 'REMOVE_CART'

/**
 * INITIAL STATE
 */
const initialState = {
  items: [],
  addedItems: [],
  total: 0
}

/**
 * ACTION CREATORS
 */
const setCart = cart => ({type: SET_CART, cart})
const updateCart = cart => ({type: UPDATE_CART, cart})
const removeCart = cart => ({type: REMOVE_CART, cart})

/**
 * THUNK CREATORS
 */
export const getCartThunk = () => async dispatch => {
  try {
    const res = await axios.get('/api/cart/')
    dispatch(setCart(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const updateCartThunk = id => async dispatch => {
  try {
    const res = await axios.put(`api/order/${id}`)
    dispatch(updateCart(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const removeCartThunk = id => async dispatch => {
  try {
    await axios.delete(`api/order/${id}`)
  } catch (err) {
    console.error(err)
  }
}

// export const auth = (email, password, method) => async dispatch => {
//   let res
//   try {
//     res = await axios.post(`/auth/${method}`, {email, password})
//   } catch (authError) {
//     return dispatch(getUser({error: authError}))
//   }

//   try {
//     dispatch(getUser(res.data))
//     history.push('/home')
//   } catch (dispatchOrHistoryErr) {
//     console.error(dispatchOrHistoryErr)
//   }
// }

// export const logout = () => async dispatch => {
//   try {
//     await axios.post('/auth/logout')
//     dispatch(removeUser())
//     history.push('/login')
//   } catch (err) {
//     console.error(err)
//   }
// }

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CART:
      return {...state, cart: action.cart}
    case UPDATE_CART:
      return {...state, cart: action.cart}
    case REMOVE_CART:
      return {...state, cart: action.cart}
    default:
      return state
  }
}
