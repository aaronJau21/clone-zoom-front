import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Screem } from "./interfaces/screem.interface";

export const initialState: Screem = {
    screenStream: null,
    isScreenCaptureActive: false
}

export const screemSlice = createSlice({
    name: 'screem',
    initialState,
    reducers: {
        setScreenStream: (state: Screem, action: PayloadAction<MediaStream | null>) => {
            state.screenStream == action.payload
        },
        setIsScreenCaptureActive: (state: Screem, action: PayloadAction<boolean>) => {
            state.isScreenCaptureActive = action.payload
        }
    }
})


export const { setScreenStream, setIsScreenCaptureActive } = screemSlice.actions
export default screemSlice.reducer