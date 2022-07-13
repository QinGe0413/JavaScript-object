//默认参数
import DEFAULTS from "./default.js";
//工具函数
import { serialize, addURLData } from "./utils.js";
//常量
import { HTTP_GET, COTENT_TYPE_FORM_URLENCODED, COTENT_TYPE_JSON } from "./constants.js";
import { serializeJSON } from "../../../云牧/上课写的代码/封装ajax/js/utils.js";
// Ajax类
class Ajax {
    constructor(url, options) {
        this.url = url;
        //合并用户参数并赋值给this.option 
        this.options = Object.assign({}, DEFAULTS, options);

        //   初识化
        this.init();
    };
    init() {
        const xhr = new XMLHttpRequest();
        this.xhr = xhr;

        //绑定事件的响应程序
        this.bindEvent();

        //准备发送请求
        xhr.open(this.options.method, this.url + this.addParam(), true);
        //设置responseType
        this.setResponseType();
        //设置超时
        this.setTimeout();
        //设置跨域是否携带cookie
        this.setCookie();
        //发送请求
        this.sendData();
    }

    //绑定事件的响应程序
    bindEvent() {
        const xhr = this.xhr;
        const { success, httpCodeError, error, abort, timeout } = this.options;
        //load
        xhr.addEventListener("load", () => {
            if (this.ok()) {
                success(xhr.response, xhr);
            } else {
                httpCodeError(xhr.status, xhr);
            }
        });
        //error
        xhr.addEventListener("error", () => {
            error(xhr);
        });
        //abort
        xhr.addEventListener("abort", () => {
            abort(xhr);
        });
        //timeout
        xhr.addEventListener("timeout", () => {
            timeout(xhr);
        });
    }
    //检测状态码是否正常
    ok() {
        const xhr = this.xhr;
        return ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304);
    }
    //在地址上添加数据
    addParam() {
        const { params } = this.options;
        if (!params) return "";
        return addURLData(this.url, serialize(params))
    }
    //设置responseType
    setResponseType() {
        this.xhr.responseType = this.options.responseType;
    }
    //设置超时
    setTimeout() {
        const { timeout } = this.options;
        if (timeoutTime > 0) {
            this.xhr.timeout = timeoutTime;
        }
    }
    //设置跨域是否携带cookie
    setCookie() {
        if (this.options.withCredentials) {
            this.xhr.withCredentials = true;
        }

    }
    //发送请求 
    sendData() {
        const xhr = this.xhr;

        if (!this.isSendData()) {
            return xhr.send(null);
        }
        let resultData = null;
        const { data } = this.options;
        //发送FormData 数据
        if (this.isFormData) {
            resultData = data;
        } else if (this.isFormURLEncodedData()) {
            this.setContentType(COTENT_TYPE_FORM_URLENCODED)
            resultData = serialize(data);
        } else if (this.JSONData()) {
            this.setContentType()
        }
        return xhr.send(resultData);
    }
    //是否需要使用sendData发送数据
    isSendData() {
        const { data, method } = this.options;
        if (!data) return false;
        if (method.toLoerCase() === HTTP_GET.toLoerCase()) return false;
        return true;
    }
    //判断是否发送FormData数据
    isFormData() {
        return this.options.data instanceof FormData;
    }
    //判断是否发送 application/x-www-form-urlencoded 格式的数据
    isFormURLEncodedData() {
        return this.options.cotentType.toLoerCase().includes(COTENT_TYPE_FORM_URLENCODED);
    }
    //判断是否发送的是否是 JSON 格式的数据
    JSONData() {
        return this.options.cotentType.toLowerCase().includes(COTENT_TYPE_JSON);
    }
    // 设置发送的数据格式ContentType
    setContentType(contentType = this.options.conetntType) {
        if (!contentType) return;
        this.xhr.setRequestHeader("Content-Type", contentType);
    }
    //获取XHR对象
    getXHR() {
        return this.xhr;
    }
}
export default Ajax;