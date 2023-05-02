import {Api} from "../config/api";

export const GetFavoritesOils = async (arr) =>{
    const result = await Api('', {body:arr})
    return result
}

export const GetShoppingOils = async (arr) =>{
    const result = await Api('', {body:arr})
    return result
}