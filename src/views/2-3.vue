<template>
        <div class="home">
        axios请求方法及别名2-3
    </div>

</template>
<script>
//并发请求：同时进行多个请求，并统一处理返回值
import axios from 'axios'
export default {
    name: 'axios2-3',
    components:{},
    created(){
        //axios.all() axios.spread()
        axios.all(
            [
                axios.get('/data.json'),
                axios.get('/city.json')
            ]
        ).then(
            axios.spread((dataRes,cityRes)=>{
                console.log('dataRes:',dataRes)
                console.log('cityRes:',cityRes)
            })
        )
    },
}
</script>