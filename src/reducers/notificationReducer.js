// import { createSlice } from "@reduxjs/toolkit"

const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.notification
    case 'CLEAR_NOTIFICATION':
      return null
    default:
      return state
  }
}

export const notificationChange = notification => {
  return {
    type: 'SET_NOTIFICATION',
    notification,
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEAR_NOTIFICATION',
  }
}

let timer 
export const setNotification = (notification, seconds) => {
  return async dispatch => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      dispatch(clearNotification())
    }, seconds * 1000)
    dispatch(notificationChange(notification))
  }
}

export default notificationReducer
// let initialState = null

// const notificationSlice = createSlice({
//   name: 'notifications',
//   initialState,
//   reducers: {
//     notificationChange(notification) {
//       return {
//         type: 'SET_NOTIFICATION',
//         notification,
//       }
//     },
//     clearNotification() {
//       console.log('two')
//     },
//     setNotification(state, action) {

//     }
//   }
// })

// export const { setNotification } = notificationSlice.actions
// export default notificationSlice.reducer