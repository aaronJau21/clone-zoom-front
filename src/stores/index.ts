import { configureStore } from "@reduxjs/toolkit";
import WscReducer from './identity/wsc'
import UserReducer from './identity/user'
import ScreenReducer from './identity/screem'

export const store = configureStore({
    reducer: {
        wsc: WscReducer,
        user: UserReducer,
        screen: ScreenReducer
    }
})