<template>
   <button @click="nottifyParent">通知父组件</button>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';

const emit = defineEmits(['notify'])

const nottifyParent = ():void => {
    emit('notify', '子组件已点击按钮')
}
</script>
