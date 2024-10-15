<template>
    <div>
        <h2>{{ book.title }}</h2>
        <p>{{ book.description }}</p>
        <button @click="addToCart">加入购物车</button>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const book = ref({ title: '', description: '' });

// 模拟书籍数据
const books = [
    { id: 1, title: 'Vue.js 实战', description: '一本关于 Vue.js 的实战指南' },
    { id: 2, title: '深入浅出 TypeScript', description: '学习 TypeScript 的好书' },
];

onMounted(() => {
    // 使用类型断言将 route.params.id 处理为 string
    const bookId = parseInt(route.params.id as string);
    book.value = books.find(b => b.id === bookId) || { title: '未知书籍', description: '未找到书籍详情' };
});

function addToCart() {
    alert('书籍已成功加入购物车');
}
</script>

<style scoped>
.book-detail {
    max-width: 600px;
    margin: 40px auto;
    padding: 20px;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    text-align: center;
}

.book-title {
    font-size: 1.8em;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
}

.book-description {
    font-size: 1.2em;
    color: #666;
    margin-bottom: 30px;
    line-height: 1.5;
}

.add-to-cart {
    background-color: #42b983;
    color: white;
    font-size: 1em;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.add-to-cart:hover {
    background-color: #369b72;
}

.add-to-cart:active {
    background-color: #2f855a;
}
</style>