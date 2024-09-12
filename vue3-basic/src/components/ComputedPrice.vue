<template>
    <div>
        <p>{{ price }}</p>
        <p>{{ discount }}</p>
        <p>{{ discountedPrecie }}</p>
    </div>
</template>

<script setup lang="ts">
import  {ref,computed} from 'vue'

const price = ref<number>(100)

const discount = ref<number>(0.8)

const discountedPrecie = computed(() => {
    return price.value * discount.value
})
</script>

