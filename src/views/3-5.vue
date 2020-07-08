<template>
  <div class="home">
      axios取消请求
  </div>
</template>

<script>
//axios取消请求:用于取消正在进行的http请求
import axios from 'axios'
export default {
  name: 'axios3-5',
  components: {},
  created(){

    let source = axios.CancelToken.source();
    axios.get('/data.json',{
        cancelToken:source.token
    }).then( (res)=> {
      console.log(res)
    }).catch( error => {
       console.log(error) 
    })

    //取消请求
    source.cancel('cancel http')

  
  },
}
</script>
