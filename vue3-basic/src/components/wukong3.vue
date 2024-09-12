<template>
    <div >
        <h1>{{ title }}</h1>
    <ul>
        <li v-for="skill in skills" :key="skill.id">
            {{ skill.name }} -
            <span v-if="skill.condition == true">已解锁</span>
            <span v-else>未解锁</span>
        </li>
    </ul>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const title=ref('技能列表')
interface Skill {
    id: number
    name: string
    condition: boolean
}


const skills = ref<Skill[]>([
    {id:1,name:'七十二变',condition:true},
    {id:2,name:'火眼金睛',condition:false},
    {id:3,name:'筋斗云',condition:true},
    
])
</script>

