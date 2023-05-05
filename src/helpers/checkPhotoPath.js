import {BASE_API_URL} from "../config/api";

export const checkPhotoPath = (path = '', event=false, why=false) =>
    path?.length
        ? path.includes('http')
            ? path
            : `https://api.roweoilkzn.ru/static/uploads/${path}`
        : event?
            `${why?'../':''}../../imgs/userDontFind.jpg`
            :'../imgs/userDontFind.jpg'
