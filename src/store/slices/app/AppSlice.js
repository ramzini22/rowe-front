import {createSlice} from "@reduxjs/toolkit";
import {GetBanner, GetInformation, GetOptionsWithParams} from '../../../services/Options'
import {SearchByString} from "./Action";

const initialState = {
    notFound: false,
    categories: [],
    fingerprint: null,
    alertSlice: null,
    banner: null,
    information:null,
    searchInput:null,
    requestShow:true
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
        },
        setRequestShow(state ,action){
            state.requestShow=!state.requestShow
        },
        RequestShowInit(state ,action){
            state.requestShow=true
        }
    },
    extraReducers: builder => {
        builder.addCase(GetOptionsWithParams.fulfilled, (state, action) => {
            state.categories = action.payload
        })
        builder.addCase(GetBanner.fulfilled, (state, action) => {
            state.banner= action.payload
        })
        builder.addCase(GetInformation.fulfilled, (state, action) => {
            state.information= action.payload
        })
        builder.addCase(SearchByString.pending, (state, action) => {
            state.searchInput= 'loading'
        })
        builder.addCase(SearchByString.fulfilled, (state, action) => {
            state.searchInput= action.payload
        })
        builder.addCase(SearchByString.rejected, (state, action) => {
            state.searchInput= null
        })
    },
})
export const AppActions = AppSlice.actions;
export const AppReducers = AppSlice.reducer;
export const {setFingerprint} = AppSlice.actions;