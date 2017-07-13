/**
 * Created by mapbar_front on 2017/7/13.
 */


//注释写法。

/**
 * @method 方法名
 * @param {参数类型} 参数名 参数说明
 * @type {string}
 * @return {返回值类型} 返回值说明
 * @todo:未处理的东西
 */
let serviceUrl = '';
let userInfo;
let token = null;
let userId = null;
let interceptors = [];
let isInterceptorAlerting = false;
//todo 目前拦截器只有一种是Alert形式，为了解决账号被T时弹出框重复问题。临时通过这个变量控制，后续扩展会放开。


/**
 * isFunction 方法的作用是判断是否是一个函数。
 * @method isFunction
 * @param value
 * @return {boolean}
 */
function isFunction(value) {
    return typeof value === 'function';
}
function isUndefined(value) {
   return typeof value === 'undefined';
}
function isString(value) {
    return typeof value === 'string';
}

/**
 * @method request, fetch封装和兼容性实现
 * @param opts
 * @param processor
 * @param isUpLoad
 */
function request(opts,processor,isUpLoad = false) {
    let url = /^(http|https):\/\//.test(opts.url) ? opts.url : (serviceUrl + opts.url),
        options = {
        method:opts.method||'GET',
            cache:false,
            //mode:'cors',
            headers:new Headers()
        }
}
/**
 * 准备抛出的对象，
 * @type {{get: RequestService.get, post: RequestService.post, request: request}}
 */
let RequestService = {
    get:function (url,data,processor) {
        if(arguments.length === 2 && isFunction(data)){
            processor = data;
            data = null
        }

        return request({
            url:url,
            data:Object.assign({},data)
        },processor);
    },
    post:function (url,data,processor,isUpload) {
        if(isFunction(data) && arguments.length === 2){
            isUpload = processor;
            processor = data;
            data = null;
        }

        return request({
            method: 'POST',
            url:url,
            data: (data instanceof FormData) ? data : Object.assign({},data)
        },processor, isUpload)
    },
    request:request
}
export default RequestService;