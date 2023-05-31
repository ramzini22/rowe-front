import {Api, apiRoutes} from "../config/api";

export const SetConnect = async (body) =>{
    const result = await Api(apiRoutes.CREATE_CONNECT, {body, method:'POST'})
    return result
}
