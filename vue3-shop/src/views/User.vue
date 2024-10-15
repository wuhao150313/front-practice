<template>
    <div class="user-container">
        <h3>用户信息详情</h3>
        <button @click="handleLogout" class="logout-button">退出登录</button>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function handleLogout() {
    localStorage.removeItem('token');
    router.push('/');
}
</script>

<style scoped>
.user-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f7f7f7;
}

h3 {
    font-size: 2em;
    color: #34495e;
    margin-bottom: 20px;
}

.logout-button {
    padding: 10px 20px;
    font-size: 1.2em;
    background-color: #e74c3c;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.logout-button:hover {
    background-color: #c0392b;
    transform: scale(1.05);
}

.logout-button:active {
    transform: scale(1);
}
</style>
