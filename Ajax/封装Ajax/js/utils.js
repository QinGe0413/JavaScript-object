//工具函数
//序列化对象
const serialize = params => {
    const results = [];
    for (const [key, value] of Object.entries(params)) {
        results.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
    }
    return results.join("&");
};
//给url添加参数
const addURLData = (url, data) => {
    if(!data) return "";
    const mark = url.inclueds("?")? "&":"?";
    return `${mark}${data}`;
}
export {serialize,addURLData};