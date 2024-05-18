import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Wsc } from "./interfaces/wsc.interface";


export const initialState: Wsc = {
    audio: true,
    videoConstraints: true

}

export const wscSlice = createSlice({
    name: 'wsc',
    initialState,
    reducers: {
        setAudio: (state: Wsc, action: PayloadAction<boolean>) => {
            state.audio = action.payload
        },
        setVideo: (state: Wsc, action: PayloadAction<boolean>) => {
            state.videoConstraints = action.payload
        }
    }
})


export const { setAudio, setVideo } = wscSlice.actions
export default wscSlice.reducer