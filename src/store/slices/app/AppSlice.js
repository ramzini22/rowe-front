import {createSlice} from "@reduxjs/toolkit";
import {GetBanner, GetOptionsWithParams} from '../../../services/Options'

const initialState = {
    notFound: false,
    categories: [],
    fingerprint: null,
    alertSlice: null,
    banner: null
}
const AppSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setNotFound(state, action) {
            state.notFound = action.payload
        },
        setFingerprint: (state, action) => {
            state.fingerprint = {...action?.payload, isShow: true}
        },
        setAlert: (state, action) => {
            state.alertSlice = {...action.payload, isShow: true}
        }
    },
    extraReducers: (builder) => {
        builder.addCase(GetOptionsWithParams.fulfilled, (state, action) => {
            state.categories = action.payload
        })
        builder.addCase(GetBanner.fulfilled, (state, action) => {
            console.log(action.payload)
            state.banner= action.payload
        })
        builder.addCase(GetBanner.rejected, (state, action) => {
            console.log(2)
            state.banner= action.payload
        })
    },
})
export const AppActions = AppSlice.actions;
export const AppReducers = AppSlice.reducer;
export const {setFingerprint} = AppSlice.actions;