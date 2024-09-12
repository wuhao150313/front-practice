<template>
    <!-- <div>
<input ref="inputElement" type="text" placeholder="聚焦在此" />
<button @click="focusInput">点击聚焦输入框</button>
    </div> -->
    <div ref="box" class="box">我是一个方块</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'


const box = ref<HTMLDivElement | null>(null)

onMounted(() => {
    if (box.value) {
        box.value.style.backgroundColor = 'lightblue'
    }
})
// const inputElement = ref<HTMLInputElement | null>(null)

// const focusInput = () => {
//     if (inputElement.value) {
//         inputElement.value.focus()
//     }
// }
</script>

<style scoped>
.box{
    width: 100px;
    height: 100px;
    background-color: gray;
}
</style>
