<template>
    <div>
<!-- <input v-model.lazy="name" placeholder="请输入姓名" />
<p>您输入的姓名是L: {{ name }}</p> -->
/
<!-- <input v-model.lazy="age" type="number" placeholder="请输入年龄" />
<p>您的年龄是：{{ age }}</p> -->
<input v-model.trim="username"  placeholder="请输入用户名" />
<p>您的用户名是：{{ username }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const username = ref<string>('')
// const age = ref<number | null>(null)
// const age = ref<string>('')
</script>

