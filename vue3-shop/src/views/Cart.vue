<template>
    <div class="cart-container">
        <h2 class="cart-title">购物车</h2>
        <ul class="cart-items">
            <li v-for="book in cartBooks" :key="book.id" class="cart-item">
                <span class="book-title">{{ book.title }}</span> -
                <span class="book-quantity">数量: {{ book.quantity }}</span>
                <div class="cart-buttons">
                    <button @click="increase(book)" class="btn increase-btn">增加</button>
                    <button @click="decrease(book)" class="btn decrease-btn">减少</button>
                </div>
            </li>
        </ul>
        <p v-if="cartBooks.length === 0" class="empty-message">购物车为空</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Book {
    id: number;
    title: string;
    quantity: number;
}

const cartBooks = ref<Book[]>([
    { id: 1, title: 'Vue.js 实战', quantity: 1 },
    { id: 2, title: '深入浅出 TypeScript', quantity: 2 },
]);

function increase(book: Book) {
    book.quantity++;
}

function decrease(book: Book) {
    if (book.quantity > 1) {
        book.quantity--;
    } else {
        cartBooks.value = cartBooks.value.filter(b => b.id !== book.id);
    }
}
</script>

<style scoped>
.cart-container {
    max-width: 800px;
    margin: 40px auto;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.cart-title {
    font-size: 2em;
    text-align: center;
    color: #333;
    margin-bottom: 30px;
}

.cart-items {
    list-style: none;
    padding: 0;
}

.cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
}

.book-title {
    font-size: 1.2em;
    color: #333;
}

.book-quantity {
    margin-left: 10px;
    font-size: 1.1em;
    color: #666;
}

.cart-buttons {
    display: flex;
    gap: 10px;
}

.btn {
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
}

.increase-btn {
    background-color: #42b983;
    color: white;
}

.decrease-btn {
    background-color: #ff4b4b;
    color: white;
}

.btn:hover {
    opacity: 0.8;
}

.cart-item:last-child {
    border-bottom: none;
}

.empty-message {
    text-align: center;
    font-size: 1.5em;
    color: #666;
    margin-top: 20px;
}
</style>
