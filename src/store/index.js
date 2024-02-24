import {configureStore} from '@reduxjs/toolkit';
import planSlice from './planSlice';

export default configureStore({
    reducer: {
        plan: planSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware( {serializableCheck: false} )
});