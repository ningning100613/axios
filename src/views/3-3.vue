<template>
    <div>
        axios拦截器
    </div>
</template>

<script>
//拦截器：在请求或相应被处理前拦截
//请求拦截器
//响应拦截器
    import axios from 'axios'
    export default {
        name:'axios3-3',
        components:{},
        created(){
            //添加请求拦截器
            axios.interceptors.request.use( config =>{
                // 在发送请求之前做些什么,然后return
                return config
            },error => {
                // 对请求错误做些什么
                return Promise.reject(error)
            });

            // 添加响应拦截器
            axios.interceptors.response.use( response => {
                // 对响应数据做点什么
                return response;
            },error => {
                // 对响应错误做点什么
                return Promise.reject(error);
            })

            //取消拦截器
            var myInterceptor = axios.interceptors.request.use(config => {
                /*...*/
                config.headers= {
                    auth:true
                }
                return config
            });
            axios.interceptors.request.eject(myInterceptor);


            //实例 
            //需要登录的接口（token）
            let instance = axios.create({})
            instance.interceptors.request.use( config => {
                config.headers.token = ''
                return config
            },error => {
                return Promise.reject(error)
            })

            //不需要登录的接口
            let newInstance = axios.create({})
            newInstance.get()


            //移动端开发 加入loading
            let instance_phone = axios.create({})
            instance_phone.interceptors.request.use( config => {
                //loading显示代码
                return config
            },error => {
                return Promise.reject(error)
            })
            instance_phone.interceptors.response.use( response => {
                //loading隐藏代码
                return response
            },error => {
                return Promise.reject(error)
            })


        },
    }
</script>

<style lang="scss" scoped>

</style>