import { createSlice } from '@reduxjs/toolkit';

export const materiaPSlice = createSlice({
    name: 'materiasP',
    initialState: {
        materiasP:[]
      
    },
    reducers: {
        getMateriasP: ( state, { payload } ) => {
            state.materiasP = payload;
        },
        addMateriasP: ( state, { payload } ) => {
            state.materiasP.push( payload );
           
        },
        onUpdateMateriaP: ( state, { payload } ) => {
            state.materiasP = state.materiasP.map( event => {
                if ( event._id === payload._id ) {
                    return payload;
                }

                return event;
            });
        },

        deleteMateriaP: ( state, { payload } ) => {
            state.materiasP = state.addMateriasP.filter(element => element._id != payload.id );
        
        }
   
}});


// Action creators are generated for each case reducer function
export const {  getMateriasP, addMateriasP, onUpdateMateriaP,deleteMateriaP} = materiaPSlice.actions;