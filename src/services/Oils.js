import {Api, apiRoutes} from "../config/api";

export const GetFavoritesOils = async (arr) =>{
    const result = await Api('', {body:arr})
    return result
}

export const GetShoppingOils = async (arr) =>{
    const result = await Api('', {body:arr})
    return result
}

export const GetOilsByIds = async (body) =>{
    const result = await Api(`${apiRoutes.GET_OILS_DY_IDS}?ids=[${body}]`, )
    return result
}