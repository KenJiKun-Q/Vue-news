<template>
    <!-- @input是输入框每次输入的时候都会触发的 -->
    <!-- :class值如果是对象的话,key是class的名称,如果这个key的值是true的时候就加上改class -->
   <input 
   class="input"
   :class="{
       success:status === 'success',
       error:status === 'error'
   }"
   :placeholder="placeholder"
   :value="value"
   @input="handleInput"
   @change="handleChange"
    />
</template>

<script>
export default {
    data(){
        return{
            status:""
        }
    },
    props:[
        "placeholder",
        "value",
        "name",


        //rule传递过来的正则表达式
        "rule",
        "err_message"
    ],

    // mounted(){
    //     console.log(this.rule)
    // },

    methods:{
        //每次输入框输入都会触发
        handleInput(event){
            // console.log(event.target.name)
            // this.$emit("input",event.target.value)
            const {value} = event.target;

            // this.value = value
            //触发父组件的input事件,返回输入框的值
            this.$emit('input',value)

            //如果符合正则表达式数位success,反之是error
            if(this.rule){
                if(this.rule.test(value)){
                    this.status = "success"
                }else{
                    this.status = "error"
                }
            }
        },
        handleChange(){
            if(this.err_message && this.status === "error" ){
                // alert(this.err_message)
                this.$toast.fail(this.err_message)
            }
        }
    }
}
</script>

<style scoped lang="less">
.input{
    width: 100%;
    height: 38 / 360 * 100vw;
    padding: 20px 0;
    box-sizing: border-box;
    background: #fff;
    border:none;
    border-bottom: 1px #666 solid;
    outline: none;
    font-size: 18px;
}

.success {
    border-bottom: solid 1px #2d78f4;
}

.error {
    border-bottom: solid 1px red;
}
</style>