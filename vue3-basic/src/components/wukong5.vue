<template>
    <div class="container">
     <div>
     基础攻击力：
     <input v-model="baseAttack" type="number"/>
     </div>
     <div>
     装备加成：
     <input v-model="gearBonus" type="number"/>
     </div>
     <p>总攻击力：{{ totalAttack }}</p >
    </div>
    </template>
    
    <script setup lang="ts">
    import {computed ,ref } from 'vue'
    
    const baseAttack = ref<number>(50)
    const gearBonus = ref<number>(20)
    
    const totalAttack = computed(() => baseAttack.value + gearBonus.value)
    </script>
    
    <style scoped>

.container {  
   display: flex;  
   flex-direction: column;  
   align-items: center; /* 垂直居中 */  
   justify-content: center; /* 水平居中（在这里可能不是必需的，因为只有一个列）*/  
   height: 100vh; /* 使用视口高度来确保容器覆盖整个视口 */  
   text-align: center; /* 确保文本也居中 */  
 }  
    div
    {
     margin-bottom: 10px;
     padding: 10px;
     background-color: white;
     border-radius: 5px;
     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    input[type = "number"]
    {  width:100%;
     padding: 8px;
     border: 1px solid #ccc;
     border-radius: 4px;
     font-size: 16px;
    }
    
    
    </style>