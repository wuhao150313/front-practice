<template>
    <div>
<!-- <input v-model="name" placeholder="请输入姓名" />
<p>您输入的姓名是：{{ name }}</p> -->
<!-- <input type="checkbox"v-model="isChecked" />勾选此项
<p>复选框状态： {{ isChecked ? '已勾选' : '未勾选' }}</p> -->
<!-- <input type="radio" v-model="selectedOption" value="A" /> 选项A
<input type="radio" v-model="selectedOption" value="B" /> 选项B -->
<!-- <select>
    <option disabled  value="">请选择一个选项</option>
    <option value="苹果">苹果</option>
    <option value="香蕉">香蕉</option>
    <option value="橘子">橘子</option>
</select>
<p>您选择的水果是：{{ selectedItem }}</p> -->

<label><input type="checkbox" v-model ="selectedFruits" value="苹果" />
</label>
<label><input type="checkbox" v-model ="selectedFruits" value="香蕉" />
</label>
<label><input type="checkbox" v-model ="selectedFruits" value="橘子" />
</label>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selectedFruits = ref<string[]>([])
// const selectedItem = ref<string>('')
// const selectedOption = ref<string>('A')//初始值为选项A
// const isChecked = ref<boolean>(false)//初始状态为未勾选
// const name = ref<string>('')
</script>

