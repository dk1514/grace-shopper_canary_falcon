import axios from 'axios'

/**
 * ACTION TYPES
 */

const GET_HATS = 'GET_HATS'

/**
 * INITIAL STATE
 */
const hatStore = {
  hats: []
}

/**
 * ACTION CREATORS
 */
const getHats = hats => ({type: GET_HATS, hats})

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

/**
 * REDUCER
 */
export default function(state = hatStore, action) {
  switch (action.type) {
    case GET_HATS:
      return {...state, hats: action.hats}
    default:
      return state
  }
}
