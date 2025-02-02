import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../features/counter/cartSlice'
import { logger } from '../middleware/logger'






export const store = configureStore({
    reducer: {
        cart: cartReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)

})