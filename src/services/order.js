import {createAsyncThunk} from "@reduxjs/toolkit";
import {Api, apiRoutes} from "../config/api";

export const CreateOrder = createAsyncThunk(
    'user/createOrder',
    async (body = {}, thunkAPI) => {
        try {
            const response = await Api(`${apiRoutes.CREATE_ORDER}`, {body, method:'POST'})
            return thunkAPI.fulfillWithValue({response, body})
        } catch (error) {
            return thunkAPI.rejectWithValue(error?.response?.data.message)
        }
    })