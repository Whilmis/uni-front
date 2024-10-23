import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userActive: {},
        users:[],
      
    },
    reducers: {
        getUserActive: ( state,{payload} ) => {
            state.userActive   = payload;
        },
        getUsers: ( state, { payload } ) => {
            state.users = payload;
        },
        addUser: ( state, { payload } ) => {
            state.users.push( payload );
           
        },
        userPago: ( state ) => {
            state.userActive  = { ...state.userActive, pago: false }
           
        },
  
        deleteUser: ( state, { payload } ) => {
            if (  payload  ) {
                state.users = state.users.filter( event => event.uid !== payload );
       
            }
        }
   
}});


// Action creators are generated for each case reducer function
export const { getUserActive, getUsers, addUser,  deleteUser, userPago} = userSlice.actions;
