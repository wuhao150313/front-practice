<template>
    <div>
<p>年薪: {{ yearSalary }}</p>
    </div>
</template>

<script setup lang="ts">
 import { ref, computed } from 'vue'

 const mouthlySalary  =ref<number>(5000)

 const yearSalary = computed<number>(() => {
return mouthlySalary.value * 12
 })
</script>

