<template>
     <div>
    <h2>当前用户:{{ userName }}</h2>
     <button @click="changName">切换用户</button>
      <img src="@/assets/images/me.png" alt="My Image" />
     </div>
    </template>
    
    <script setup lang="ts">
    import {ref} from 'vue'
    const userName=ref<string>('孙悟空')
    
    const changName=()=>{
     userName.value='斗战圣佛'
    }
    </script>
    
    <style>
    
    </style>