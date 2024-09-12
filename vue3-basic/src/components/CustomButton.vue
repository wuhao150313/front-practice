<template>
   <button>{{ customAttr }}</button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
    customAttr: string
}>()
</script>

