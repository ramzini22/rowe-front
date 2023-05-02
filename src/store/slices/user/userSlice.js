import {createSlice} from "@reduxjs/toolkit";
const initialState={
    user:{
        favorites:[],
        shopping:[]
    },
}

const userSlice= createSlice({
    name:'user',
    initialState,
    reducers:{
        ChangeFavorites(state, action){
            const id = action?.payload
            const exist = state.user.favorites.find(element=>element==id)

            if(exist)
                state.user.favorites=state.user.favorites.filter(element=>element!=id)
            else
                state.user.favorites.push(Number(id))
        },
        ChangeShopping(state, action){
            const id = action?.payload
            const exist = state.user.shopping.find(element=>element==id)

            if(exist)
                state.user.shopping=state.user.shopping.filter(element=>element!=id)
            else
                state.user.shopping.push(Number(id))
        }
    },
})

export const RegUserActions= userSlice.actions;
export const RegReducers= userSlice.reducer;