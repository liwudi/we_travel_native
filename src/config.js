/**
 * Created by mapbar_front on 2017/7/12.
 */

/**
 * @introduction
 * 图吧同行App的配置，（主要是全局网络配置）
 */

import { Platform, NativeModules } from 'react-native';

const commonModule = NativeModules.CommonModule;

console.log('commonModule',commonModule);

const Config = {
    mainColor:'#3c78ff',
}
const  ServerBase = {
    search_url:`https://w.mapbar.com/search2015/search`,
    main_url:`https://wireless.mapbar.com/api/3n1-wxgroup`,
    voice_url:`https://wdservice.mapbar.com/weixin-test/api/3n1-wxgroupvoice`,
    voice_socket_url:`wss://wdservice.mapbar.com/weixin-test/api/3n1-wxgroupvoice`
};

const Servers = {
    base: {
        ...ServerBase,
        //other test Env
    }
};

export default {
    ...Config,
    server:Servers['base']
}