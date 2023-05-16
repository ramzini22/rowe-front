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
        return result.json()
    }catch (e){
        console.log(e)
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

    // News
    GET_ALL_NEWS: 'news/paginate',
    GET_ONE_NEW: 'news',
}

export { BASE_API_URL, BASE_URL }
export { apiRoutes }