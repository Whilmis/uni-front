import { configureStore } from '@reduxjs/toolkit';
import { uiSlice, calendarSlice, authSlice, userSlice, materiaPSlice } from './';


export const store = configureStore({
    reducer: {
        auth:     authSlice.reducer,
        calendar: calendarSlice.reducer,
        ui:       uiSlice.reducer,
        user:  userSlice.reducer,
        materiaP: materiaPSlice.reducer,
       
        
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})
