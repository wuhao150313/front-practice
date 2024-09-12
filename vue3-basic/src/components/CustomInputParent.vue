<template>
    <div>
<CustomInput v-model="inputText" />
<p>输入的文本是 : {{ inputText }}</p>
    </div>
</template>

<script setup lang="ts">
import {  ref } from 'vue';
import CustomInput from './CustomInput.vue';


const inputText = ref<string>('')
</script>

