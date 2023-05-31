const BASE_API_URL = process.env.REACT_APP_BASE_API_URL
const BASE_URL = process.env.REACT_APP_BASE_URL

export async function Api(url='', {body, method}={body:null, method:'GET'}) {
    const mainHeaders = {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Fingerprint': localStorage.getItem('fingerprint')
    }
    try {
        const init=method=='GET'?{headers: {...mainHeaders}, method}:{headers: {...mainHeaders}, method, body:JSON.stringify(body)}
        const result = await fetch(BASE_API_URL+url,
            {...init})
        if(result.status!=400 && result.status!=500)
            return result.json()
        return null
    }catch (e){
        console.log(e)
        return null
    }
}

const apiRoutes = {
    // types of oil
    GET_ALL_CATEGORY:'category',
    GET_ALL_SPECIFICATION:'specification/byCategory',
    GET_ALL_PARAMETRS:'parameter/byCategoryWithOptions',

    // Oils
    GET_ALL_OILS:'product/paginate',
    GET_OILS_DY_IDS:'product/byIds',
    GET_ONE_OIL:'product/withParameters',
    GET_OILS_WITH_DISCOUNT:'product/withDiscount',
    GET_OILS_BY_SEARCH:'product/search',

    // News
    GET_ALL_NEWS: 'news/paginate',
    GET_ONE_NEW: 'news',

    // Information about us
    GET_INFORMATION:'settings',

    // Banner
    GET_BANNER:'banner/1',

    // Order
    CREATE_ORDER:'order',

    // Connection
    CREATE_CONNECT:'callRequest'
}

export { BASE_API_URL, BASE_URL }
export { apiRoutes }