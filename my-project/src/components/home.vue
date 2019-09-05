<template>
    <div>home <button @click="go">点击</button></div>
</template>
<script>
import GLOBAL from './Global.vue';
export default {
    data(){
        return{
            token:GLOBAL.token
        }
    },
    created(){
        GLOBAL.token = '12345';
        // eslint-disable-next-line no-console
        console.log(GLOBAL.token);
    },
    methods:{
        go(){
            this.$router.push('my')
        }
    }
}
</script>
<style lang="sass">

</style>