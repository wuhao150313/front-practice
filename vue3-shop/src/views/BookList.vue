<template>
    <div class="book-list">
        <h2 class="title">书籍展示</h2>
        <ul class="book-items">
            <li v-for="book in books" :key="book.id" class="book-item">
                <img :src="book.image" alt="书籍封面" class="book-image" />
                <router-link class="book-link" :to="'/book/' + book.id">{{ book.title }}</router-link>
                <span class="book-description"> - {{ book.description }}</span>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
const books = [
    {
        id: 1,
        title: 'Vue.js 实战',
        description: '一本关于 Vue.js 的实战指南',
        image: 'https://pic.rmb.bdstatic.com/bjh/240218/dump/4000627dc224d558e5c88b28d975b5e7.png'
    },
    {
        id: 2,
        title: '深入浅出 TypeScript',
        description: '学习 TypeScript 的好书',
        image: 'https://pic.rmb.bdstatic.com/bjh/240218/dump/4000627dc224d558e5c88b28d975b5e7.png'
    },
];
</script>

<style scoped>
.book-list {
    max-width: 800px;
    margin: 40px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.title {
    font-size: 2em;
    text-align: center;
    margin-bottom: 30px;
    color: #333;
}

.book-items {
    list-style: none;
    padding: 0;
}

.book-item {
    margin-bottom: 20px;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
}

.book-image {
    width: 50px;
    /* 或根据需要调整大小 */
    height: auto;
    margin-right: 10px;
    /* 图片与书名之间的间距 */
}

.book-link {
    font-size: 1.4em;
    color: #42b983;
    text-decoration: none;
    margin-right: 10px;
    transition: color 0.3s ease;
}

.book-link:hover {
    color: #369b72;
}

.book-description {
    font-size: 1.1em;
    color: #666;
}

.book-item:last-child {
    border-bottom: none;
}
</style>
