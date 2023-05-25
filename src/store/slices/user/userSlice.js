import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: {
        favorites: [],
        shopping: []
    },
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        ChangeFavorites(state, action) {
            const id = action?.payload
            let exist = false
            const newArray = state.user.favorites.map(element => {
                if (element.id == id) {
                    exist = true
                    return {id, count: element.count + 1}
                } else return element
            })
            if (exist)
                state.user.favorites = newArray
            else
                state.user.favorites.push({id: Number(id), count: 1})
        },
        ChangeShopping(state, action) {
            const {id, key} = action?.payload
            const element = state.user.shopping.find(el => el.id == id)
            if (element) {
                if (key) {
                    state.user.shopping = state.user.shopping.map(el => el.id == id ? {id, count: el.count + 1} : el)
                } else if (element.count == 1) {
                    state.user.shopping = state.user.shopping.filter(el => el.id != id)
                } else {
                    state.user.shopping = state.user.shopping.map(el => el.id == id ? {id, count: el.count - 1} : el)
                }
            } else {
                if (key) {
                    state.user.shopping.push({id: Number(id), count: 1})
                }
            }
        },
        DeleteAllShopping(state, action) {
            // console.log(state.user.shopping.filter(element=>action.payload?.find(element2=>element2==element.id)?false:true))
            state.user.shopping = state.user.shopping.filter(element => action.payload?.find(element2 => element2 == element.id) ? false : true)
        }
    },
})

export const RegUserActions = userSlice.actions;
export const RegReducers = userSlice.reducer;