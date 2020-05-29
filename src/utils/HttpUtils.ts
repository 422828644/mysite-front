import {Vue} from "vue-property-decorator";

export default class HttpUtils {

    public static get(api: string, params?: any) {
        return Vue.axios.get(api, { params: params, headers: {"Content-Type": "application/json; charset=UTF-8"}});
    }

    public static post(api: string, data?: any) {
        return Vue.axios.post(api, JSON.stringify(data), {headers: {"Content-Type": "application/json; charset=UTF-8"}})
    }

}
