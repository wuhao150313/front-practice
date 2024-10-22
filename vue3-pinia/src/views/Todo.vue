<template>
    <div>
        <h2>待办清单</h2>
        <input type="text" v-model="newTodoText" placeholder="请输入新的待办事项" />
        <button @click="myAddTodo">添加</button>
    </div>

    <ul>
        <li v-for="(todo, index) in myTodos" :key="todo.id"
            :class="{ 'hover-effect': hoverIndex === index, 'clicked-effect': clickedIndex === index }"
            @mouseenter="hoverIndex = index" @mouseleave="hoverIndex = null" @click="toggleTodoStyle(index)">
            {{ todo.text }}
            <button @click.stop="muRemoveTodo(index)">删除</button>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { useTodoStore } from '../stores/useTodo';
import { ref } from "vue";

const todoStore = useTodoStore()

const newTodoText = ref("")

const myAddTodo = () => {
    if (newTodoText.value.trim()) {
        todoStore.addTodo(newTodoText.value);
        newTodoText.value = "";
    }
};

const muRemoveTodo = (index: number) => {
    todoStore.removeTodo(index);
};

const myTodos = todoStore.todos;

// 用于跟踪鼠标悬停和点击的索引
const hoverIndex = ref<number | null>(null);
const clickedIndex = ref<number | null>(null);

// 切换样式
const toggleTodoStyle = (index: number) => {
    clickedIndex.value = clickedIndex.value === index ? null : index;
};

</script>

<style scoped>
/* 鼠标移上去显示粗体 */
.hover-effect {
    font-weight: bold;
    cursor: pointer;
    /* 设置为点击模式 */
}

/* 点击后显示粗体并加删除线 */
.clicked-effect {
    font-weight: bold;
    text-decoration: line-through;
}

/* 确保列表项显示为可点击的指针 */
li {
    cursor: pointer;
}
</style>
