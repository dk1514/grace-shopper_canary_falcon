import axios from 'axios'

const GET_SINGLE_HAT = 'GET_SINGLE_HAT'
const ADD_HAT = 'ADD_HAT'

const getSingleHat = singleHat => ({type: GET_SINGLE_HAT, singleHat})
const addHat = hat => ({type: ADD_HAT, hat})

export const setSingleHatThunk = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/hats/${id}`)
    dispatch(getSingleHat(data))
  } catch (err) {
    console.error(err)
  }
}

// export const addHatThunk = id => async dispatch => {
//   try {
//     const {data} = await axios.get(`/api/hats/${id}`)
//     dispatch(addHat(data))
//   } catch (err) {
//     console.error(err)
//   }
// }

export default function(state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_HAT:
      return action.singleHat
    default:
      return state
  }
}
