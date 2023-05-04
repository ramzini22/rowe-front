import {createSlice} from "@reduxjs/toolkit";
import {GetOptionsWithParams, GetSpecification} from '../../../services/Options'

const c=[
    {
        id:1,
        image:"imgs/img2.jpg",
        title:'Для легковых авто',
    },
    {
        id:2,
        image:"imgs/img3.jpg",
        title:'Гоночные масла',
    },
    {
        id:3,
        image:"imgs/img4.jpg",
        title:'Спецтехника',
    },
    {
        id:4,
        image:"imgs/img5.jpg",
        title:'Мотоциклы и водный транспорт',
    },
    {
        id:5,
        image:"imgs/img6.jpg",
        title:'Для коммерческого транспорта',
    },
    {
        id:6,
        image:"imgs/img7.jpg",
        title:'Индустрия',
        imgClassName:'bg'
    },]

const initialState={
    notFound:false,
    categories:c,
    fingerprint:null,
    alertSlice:null
}
const AppSlice = createSlice({
    name:'app',
    initialState,
    reducers:{
        setNotFound(state, action){
            state.notFound=action.payload
        },
        setFingerprint: (state, action) => {
            state.fingerprint = {...action?.payload, isShow: true}
        },
        setAlert:(state, action)=>{
            state.alertSlice = {...action.payload, isShow: true}
        }
    },
    extraReducers: (builder) => {
        builder.addCase(GetOptionsWithParams.fulfilled, (state, action) => {
            state.categories=initialState.categories
           // state.categories = action.payload
        })
    },
})
export const AppActions= AppSlice.actions;
export const AppReducers= AppSlice.reducer;
export const {setFingerprint} = AppSlice.actions;