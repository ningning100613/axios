<template>
  <div>
      axios错误处理
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'axios3-4',
  components: {},
  created(){

      axios.interceptors.request.use(config => {
          return config
      },error => {
          return Promise.reject(error)
      })

      axios.interceptors.response.use(response => {
          return response
      },error => {
          return Promise.reject(error)
      })




    axios.get('/data.json').then( (res)=> {
      console.log(res)
    }).catch( error => {
        console.log(error)
    })

    //例子：实际开发中，一般添加统一错误处理
    let instance = axios.create();
    instance.interceptors.request.use(config => {
        return config
    },error => {
        //请求错误，一般http状态码以4开头
        //401超时   404 not found
        return Promise.reject(error)
    })
    instance.interceptors.response.use(response => {
        return response
    },error => {
        //响应错误处理,一般http状态码以5开头
        //500系统错误   502系统重启
        return Promise.reject(error)
    })
  
  },
}
</script>
