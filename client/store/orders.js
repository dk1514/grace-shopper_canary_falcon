import axios from 'axios'

/**
 * ACTION TYPES
 */
// const CART_SUM_PRODUCT = 'CART_SUM_PRODUCT'
const GET_ORDERS = 'GET_ORDERS'
const CREATE_ORDER = 'CREATE_ORDER'
const GET_CART = 'GET_CART'
const GET_PAST_ORDERS = 'GET_PAST_ORDERS'
const EDIT_CART = 'EDIT_CART'
const CHECKOUT = 'CHECKOUT'
const CREATE_UNAUTH_ORDER = 'CREATE_UNAUTH_ORDER'
const GET_TOTAL = 'GET_TOTAL'
const ADD_TO_CART = 'ADD_TO_CART'
const EDIT_QUANTITY = 'EDIT_QUANTITY'
const REMOVE_ITEM = 'REMOVE_ITEM'

/**
 * INITIAL STATE
 */
const initialState = {
  allOrders: [],
  cart: {},
  pastOrders: [],
  total: 0
}

/**
 * ACTION CREATORS
 */

export const addToCart = item => ({
  type: ADD_TO_CART,
  item
})

export const gotOrders = allOrders => ({
  type: GET_ORDERS,
  allOrders
})

export const createdOrder = order => ({
  type: CREATE_ORDER,
  order
})

export const gotCart = cart => ({
  type: GET_CART,
  cart
})

export const gotPastOrders = pastOrders => ({
  type: GET_PAST_ORDERS,
  pastOrders
})

export const editCart = cart => ({
  type: EDIT_CART,
  cart
})

export const editQuantity = item => ({
  type: EDIT_QUANTITY,
  item
})

export const removeItem = item => ({
  type: REMOVE_ITEM,
  item
})

export const checkedOut = cart => ({
  type: CHECKOUT,
  cart
})
export const createdUnauthOrder = cart => ({
  type: CREATE_UNAUTH_ORDER,
  cart
})

export const getTotal = total => ({
  type: GET_TOTAL,
  total
})

/**
 * THUNK CREATORS
 */
export const getOrders = () => {
  return async dispatch => {
    try {
      const response = await axios.get('/api/orders')
      if (response) {
        const orders = response.data
        const action = gotOrders(orders)
        dispatch(action)
      }
    } catch (err) {
      console.error(err)
    }
  }
}

export const getCart = userId => {
  return async dispatch => {
    try {
      const response = await axios.get(`/api/users/${userId}/cart`)
      if (response) {
        const cart = response.data
        const action = gotCart(cart)
        dispatch(action)
      }
    } catch (err) {
      console.error(err)
    }
  }
}

export const putCart = ({product, quantity}, userId) => {
  return async dispatch => {
    try {
      const response = await axios.put(`/api/users/${userId}/cart`, {
        product,
        quantity
      })
      const cart = response.data
      const action = editCart(cart)
      dispatch(action)
    } catch (err) {
      console.log(err)
    }
  }
}

export const putQuantity = (product, quantity, userId) => {
  return async dispatch => {
    try {
      const response = await axios.put(`/api/users/${userId}/editquantity`, {
        product,
        quantity
      })
      const cart = response.data
      const action = editQuantity(cart)
      dispatch(action)
    } catch (err) {
      console.log(err)
    }
  }
}

export const putCheckout = (userId, discount) => {
  return async dispatch => {
    try {
      const response = await axios.put(`/api/users/${userId}/checkout`, {
        discount
      })
      const cart = response.data
      const action = checkedOut(cart)
      dispatch(action)
    } catch (err) {
      console.log(err)
    }
  }
}

export const getPastOrders = userId => {
  return async dispatch => {
    try {
      const response = await axios.get(`/api/users/${userId}/past`)
      if (response) {
        const orders = response.data
        const action = gotPastOrders(orders)
        dispatch(action)
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const postUnauthOrder = (order, discount) => {
  return async dispatch => {
    try {
      order.discount = discount
      const response = await axios.post('/api/orders/checkout', order)
      const newOrder = response.data
      const action = createdOrder(newOrder)
      dispatch(action)
    } catch (err) {
      console.log(err)
    }
  }
}

export const deleteProductFromCart = (userId, productId) => {
  return async dispatch => {
    try {
      const response = await axios.put(`/api/users/${userId}/removeitem`, {
        productId
      })
      const remainedProduct = response.data
      const action = removedProductFromCart(remainedProduct)
      dispatch(action)
    } catch (error) {
      console.log(error)
    }
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

/**
 * REDUCER
 */
// eslint-disable-next-line complexity
export default function(state = initialState, action) {
  let newState = {...state}
  switch (action.type) {
    case REMOVE_ITEM: {
      newState.cart[action.item.id].quantity = 0
      delete newState.cart[action.item.id]
      return newState
    }
    case EDIT_QUANTITY: {
      if (
        newState.cart[action.item.id] &&
        newState.cart[action.item.id].quantity > 0
      )
        newState.cart[action.item.id].quantity--
      return newState
    }
    case ADD_TO_CART: {
      if (!newState.cart[action.item.id]) {
        newState.cart[action.item.id] = action.item
        newState.cart[action.item.id].quantity = 1
        return newState
      } else {
        newState.cart[action.item.id].quantity++
        return newState
      }
    }
    default:
      return state
  }
}
