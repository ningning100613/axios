<template>
    <div class="home">
         axios请求方法及别名2-2
    </div>
  </template>

<script>
/** 
 * axios请求方法：get,post,put,patch,delete
 * get:获取数据
 * post:提交数据(表单提交+文件上传)
 * put,patch:编辑、更新数据   put- 所有的数据推送到服务端  patch：只讲修改的数据推送到服务端
 * delete:删除数据
*/
import axios from "axios"
export default {
    name: 'axios2-2',
    components: {},
    created(){
        // http://localhost:8080/data.json?id=12
        axios.get('/data.json',{
            params:{
                id:12
            }
        }).then( res => {
            console.log(res)
        })
        axios({
            method:'get',
            url:'/data.json',
            params:{
                id:12
            }
        }).then( res => {
            console.log(res)
        })

        //post
        //form-data:表单提交(图片、文件上传)
        //applicition/json
        let data = {
            id:12
        }
        axios.post('/post',data).then( res=> {
            console.log(res)
        })
        axios({
            method:'post',
            url:'/post',
            data:data
        }).then( res=> {
            console.log(res)
        })
        //form-data
        let formData = new FormData();
        for(let key in data){
            // console.log(key)
            // console.log(data[key])
            formData.append(key,data[key])
            // console.log('formData:',formData)
        }
        axios.post('/post',formData).then( res=> {
            console.log(res)
        })

        //put请求
        axios.put('/put',data).then( res=> {
            console.log(res)
        })
        //patch请求
        axios.patch('/patch',data).then( res=> {
            console.log(res)
        })
        //delete请求
        //1、url拼接
        axios.delete('/delete',{
            params:{
                id:12
            }
        }).then( res=> {
            console.log(res)
        })

        //2、
        axios.delete('/delete',{
            data:{
                id:12
            }
        }).then( res=> {
            console.log(res)
        })





    },

}
</script>

<style>

</style>