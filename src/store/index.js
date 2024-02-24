import {configureStore} from '@reduxjs/toolkit';
import planSlice from './planSlice';
import registerSlice from './registerSlice';
import authSlice from './authSlice'


export default configureStore({
    reducer: {
        plan: planSlice,
        register: registerSlice,
        auth: authSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware( {serializableCheck: false} )
});