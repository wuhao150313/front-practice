<template>  
   <div class="container">  
     <div class="hp-bar">  
       <div class="hp-bar-fill" :style="{width: percentage + '%'}"></div>  
     </div>  
     <p>血量：{{ hp }}/{{ thp }}({{ percentage.toFixed(2)}}%)</p>  
   </div>  
 </template>  
   
 <script setup lang="ts">  
 import { computed, ref } from 'vue';  
   
 const thp = ref<number>(100);  
 const attack = ref<number>(40);  
   
 const hp = computed(() => {  
   return thp.value - attack.value;  
 });  
   
 const percentage = computed(() => {  
   return (hp.value / thp.value) * 100;  
 });  
 </script>  
   
 <style>  
 .container {  
   display: flex;  
   flex-direction: column;  
   align-items: center; /* 垂直居中 */  
   justify-content: center; /* 水平居中（在这里可能不是必需的，因为只有一个列）*/  
   height: 100vh; /* 使用视口高度来确保容器覆盖整个视口 */  
   text-align: center; /* 确保文本也居中 */  
 }  
   
 .hp-bar {  
   width: 100%; /* 这里的100%是相对于.container的宽度，但由于.container使用了flex和vh单位，这可能不是你想要的 */  
   max-width: 300px; /* 可以设置一个最大宽度，以防止血条过长 */  
   height: 20px;  
   background-color: #ddd;  
   border-radius: 10px;  
   margin: 10px 0;  
   overflow: hidden;  
 }  
   
 .hp-bar-fill {  
   height: 100%;  
   width: 0px;  
   background-color: red;  
   border-radius: 10px;  
   transition: width 0.3s ease-in-out;  
 }  
 </style>