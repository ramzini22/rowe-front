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

export const GetSpecifications = async (id) => {
    const response = await Api(`${apiRoutes.GET_ALL_SPECIFICATION}/${id}`)
    return response
}

export const GetaLLParametrs = async (id) => {
    const response = await Api(`${apiRoutes.GET_ALL_PARAMETRS}/${id}`)
    return response
}
export const GetAllProducts = async (params) => {
    const {options, specifications, ...payload} = params
    let request=`${apiRoutes.GET_ALL_OILS}?${new URLSearchParams(payload)}`
    if(options?.length>0)
        request+=`&options=[${options}]`
    if(specifications?.length>0)
        request+=`&specifications=[${specifications}]`

    const response = await Api(request)
    return response
}