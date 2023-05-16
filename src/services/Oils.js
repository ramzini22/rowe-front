import {Api, apiRoutes} from "../config/api";

export const GetOilsByIds = async (body) =>{
    const result = await Api(`${apiRoutes.GET_OILS_DY_IDS}?ids=[${body}]` )
    return result
}

export const GetOilsOne = async (id) =>{
    const result = await Api(`${apiRoutes.GET_ONE_OIL}/${id}` )
    return result
}

export const GetOilsWithDiscount = async () =>{
    const result = await Api(`${apiRoutes.GET_OILS_WITH_DISCOUNT}`)
    return result
}
