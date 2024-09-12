<template>
    <div>
        <!-- <button v-bind="isDisabled">点击</button> -->
        <button :disabled="isDisabled">点击</button>
        <img :src="url"/>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const isDisabled = ref<boolean>(true)
const url = ref<string>('https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%9D%9A%E6%9E%9C&step_word=&hs=0&pn=1&spn=0&di=7400427937490534401&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=154087750%2C1859223802&os=454110054%2C1401132472&simid=3051107375%2C3747464831&adpicid=0&lpn=0&ln=1843&fr=&fmq=1725952189932_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=https%3A%2F%2Fobjectmc2.oss-cn-shenzhen.aliyuncs.com%2Fyhdoc%2F202403%2F22%2F202403221810251551288683.jpeg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3Bfpw6fu7g1_z%26e3BvgAzdH3Ffijg2i75AzdH3Fbl988_z%26e3Bip4s&gsm=1e&rpstart=0&rpnum=0&islist=&querylist=&nojc=undefined&dyTabStr=MCwzLDEsMiwxMyw3LDYsNSwxMiw5&lid=6000630611858497489')

// console.log(url.value)
</script>

