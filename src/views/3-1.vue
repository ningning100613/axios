<template>
    <div>
        axios实例3-1
    </div>
</template>

<script>
//axios实例
import axios from 'axios'
export default {
    name:"axios3-1",
    components:{},
    created(){
        let instance = axios.create({
            baseURL: 'http://localhost:8081',
            timeout: 1000
        })
        instance.get('/data.json').then(res=> {
            console.log(res)
        })
    },

}
</script>

<style lang="scss" scoped>

</style>