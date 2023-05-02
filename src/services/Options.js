import {Api, apiRoutes} from "../config/api";
import {createAsyncThunk} from "@reduxjs/toolkit";


export const GetOptionsWithParams = createAsyncThunk(
    'app/getCategories',
    async (payload = {}, thunkAPI) => {
        try {
            const response = await Api(apiRoutes.GET_ALL_CATEGORY)
            return thunkAPI.fulfillWithValue(response)
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data.message)
        }
    })