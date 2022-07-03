import {axiosService} from "./axios.service";
import {baseURL, urls} from "../constants";


export const userService = {
    getPages:(page) => axiosService.get(`${urls.page}+${page}`)
}