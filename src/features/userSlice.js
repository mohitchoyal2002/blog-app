import { createSlice } from '@reduxjs/toolkit'

// const user = JSON.parse(sessionStorage.getItem('user'))

const userSlice = createSlice({
  name: 'user',
  initialState : {user: null},
  reducers: {
    login: (state, action)=>{
        const mail = action.payload.name
        const password = action.payload.password
        if(mail === 'ly277423@gmail.com' && password === '12345')
          state.user = action.payload
          // sessionStorage.setItem('user', JSON.stringify(state.user))
    }
  }
});

export const {login} = userSlice.actions
export const userSelector = state=>state.user.user

export default userSlice.reducer