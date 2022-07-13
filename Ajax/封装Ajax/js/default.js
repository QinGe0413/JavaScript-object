// 默认参数类
import {HTTP_GET,COTENT_TYPE_FORM_URLENCODED,COTENT_TYPE_JSON} from "./constants.js";
const DEFAULTS = {
    method: HTTP_GET,

    //请求头携带的数据
    params: null,

    // 请求体携带的数据
    data:null,

    // 属性
    cotentType:COTENT_TYPE_FORM_URLENCODED,
    responseType:"",
    timeoutTime:0,
    withCradentials:false,

    // 方法
    success(){},
    httpCodeError(){},
    error(){},
    abort(){},
    timeout(){},
}
export default DEFAULTS;