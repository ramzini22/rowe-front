import {Api, apiRoutes} from "../config/api";

export const GetAllNews = async (params) =>{
    const result = await Api(`${apiRoutes.GET_ALL_NEWS}?${ new URLSearchParams(params)}`)
    return result
}

export const GetOneNew = async (id) =>{
    const result = await Api(`${apiRoutes.GET_ONE_NEW}/${id}`)
    return result
}