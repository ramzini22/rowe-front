import {setFingerprint} from '../app/AppSlice'
import fingerprint from '@fingerprintjs/fingerprintjs'
import {createAsyncThunk} from "@reduxjs/toolkit";
import {Api, apiRoutes} from "../../../config/api";
const initFingerprint = createAsyncThunk('fingerprint/init', async (_, thunkAPI) => {
    fingerprint
        .load()
        .then((fp) => fp.get())
        .then((result) => {
            if (result) {
                thunkAPI.dispatch(setFingerprint(result.visitorId))
            }
        })
})

export const SearchByString = createAsyncThunk(
    'app/searchByString',
    async (query = '', thunkAPI) => {
        try {
            const response = await Api(`${apiRoutes.GET_OILS_BY_SEARCH}?query=${query}`)
            return thunkAPI.fulfillWithValue(response)
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data.message)
        }
    })

export {initFingerprint}