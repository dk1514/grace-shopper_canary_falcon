import axios from 'axios'

/**
 * ACTION TYPES
 */

const GET_HATS = 'GET_HATS'
const GET_SINGLE_HAT = 'GET_SINGLE_HAT'

/**
 * INITIAL STATE
 */
const hatStore = {
  hats: [],
  singleHat: {}
}

/**
 * ACTION CREATORS
 */
const getHats = hats => ({type: GET_HATS, hats})
const getSingleHat = singleHat => ({type: GET_SINGLE_HAT, singleHat})

/**
 * THUNK CREATORS
 */
export const setHatsThunk = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/hats')
    dispatch(getHats(data))
  } catch (err) {
    console.error(err)
  }
}

export const setSingleHatThunk = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/hats/${id}`)
    dispatch(getSingleHat(data))
  } catch (err) {
    console.error(err)
  }
}
/**
 * REDUCER
 */
export default function(state = hatStore, action) {
  switch (action.type) {
    case GET_HATS:
      return {...state, hats: action.hats}
    case GET_SINGLE_HAT:
      return {...state, singleHat: action.singleHat}
    default:
      return state
  }
}
