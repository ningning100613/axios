<template>
    <div>
        axios配置参数
    </div>
</template>

<script>
//axios配置参数
import axios from 'axios'
export default {
    name:"axios3-2",
    components:{},
    created(){
        axios.create({
            baseURL:'http://localhost:8081',//请求域名
            timeout:1000,//请求超时时长(ms)
            url:'/data.json',//请求路径
            method:'get,post,put,patch,delete',//请求方法
            headers:{
                token:'',
            },//请求头
            params:{},//请求参数拼接url上
            data:{},//请求参数放入请求体里
        })

        //1.axios全局配置
        axios.defaults.timeout = 1000;
        axios.defaults.baseURL = 'http://localhost:8081';

        //2.axios实例配置
        let instance = axios.create();
        instance.defaults.timeout = 1500;

        //3.axios请求配置
        instance.get('/data.json',{
            timeout:3000
        })


        //实际开发
        //有两种请求接口
        //http://localhost:9090
        //http://localhost:9091

        let instance2 = axios.create({
            baseURL: 'http://localhost:9090',
            timeout: 1000
        })
        instance2.get('/data.json').then(res=> {
            console.log(res)
        })




    },

}
</script>

<style lang="scss" scoped>

</style>