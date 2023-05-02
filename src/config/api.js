const BASE_API_URL = process.env.REACT_APP_BASE_API_URL
const BASE_URL = process.env.REACT_APP_BASE_URL

export async function Api(url='', {headers, body, method}={headers:null, body:null, method:'GET'}) {
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
    //auth
    GET_ALL_CATEGORY:'category',

}

export { BASE_API_URL, BASE_URL }
export { apiRoutes }