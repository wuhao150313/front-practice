<template>
    <div class="scroll-demo">
        <button @click="scrollToSkills">滚动到技能展示</button>
    <div class="content">
        <div ref="skillsSection" class="skills">
        <h2>技能展示</h2>
        <P>技能详细内容...</P>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const skillsSection = ref<HTMLElement | null>(null);

const scrollToSkills = () => {
    skillsSection.value?.scrollIntoView({ behavior: 'smooth'});
};
</script>

<style scoped>
.scroll-demo{
    text-align: center;
    margin-top: 20px;
}
.skills{
    margin-top: 1000px;
    padding: 20px;
    background-color: aquamarine;
    border-radius: 8px;
}
button{
    background-color:aqua;
    color:white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
button:hover{
    background-color: bisque;
}
</style>