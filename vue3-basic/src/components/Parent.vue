<template>
    <Child @notify="handleNotification" />
    <p>{{ message }}</p>
</template>

<script setup lang="ts">
import Child from './Child.vue';
import { ref } from 'vue';

const message = ref<string>('等待子组件通知')

const handleNotification = (msg:string): void => {
    message.value=msg
}

</script>

