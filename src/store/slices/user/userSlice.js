import {createSlice} from "@reduxjs/toolkit";
import {CreateOrder} from "../../../services/order";
import {SearchByString} from "../app/Action";

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
            const exist = state.user.favorites.find(element=>element==id)
            if(exist)
                state.user.favorites=state.user.favorites.filter(element=>element!=id)
            else
                state.user.favorites.push(Number(id))
            // state.user.favorites=[]
        },
        ChangeShopping(state, action) {
            const {id, key, price} = action?.payload
            const element = state.user.shopping.find(el => el.id == id)
            if (element) {
                if (key) {
                    if (element.count<99)
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
            // state.user.shopping=[]
        },
        DeleteOneProduct(state, action) {
            const {id} = action?.payload
            state.user.shopping = state.user.shopping.filter(el => el.id != id)
        },
        DeleteAllShopping(state, action) {
            state.user.shopping = state.user.shopping.filter(element => action.payload?.find(element2 => element2 == element.id) ? false : true)
        }
    },
    extraReducers:builder => {
        builder.addCase(CreateOrder.fulfilled, (state, action) => {
            const products = action.payload?.body?.products?.map(element=>element.productId)
            state.user.shopping = state.user.shopping.filter(element => products?.find(element2 => element2 == element.id) ? false : true)
        })
    }
})

export const RegUserActions = userSlice.actions;
export const RegReducers = userSlice.reducer;