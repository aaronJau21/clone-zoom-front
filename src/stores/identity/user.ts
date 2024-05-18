import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "./interfaces/user.interface";

export const initialState: User = {
    name: ''
}



export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setName: (state: User, action: PayloadAction<string>) => {
            state.name = action.payload
        }
    }
})


export const { setName } = userSlice.actions


export default userSlice.reducer