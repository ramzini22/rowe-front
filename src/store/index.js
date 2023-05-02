import {bindActionCreators, combineReducers, configureStore} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import {useDispatch, useSelector} from "react-redux";
import {RegUserActions,RegReducers} from './slices/user/userSlice'
import {AppReducers,AppActions} from './slices/app/AppSlice'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}
const rootReducer = combineReducers({
    user: RegReducers,
    app: AppReducers
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store=configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware()
            .prepend()
});
const actions={
    ...RegUserActions,
    ...AppActions
}
export const useAppSelector = useSelector
export const useAppAction=()=>{
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch)
}

export const persistor = persistStore(store)