<template>
    <div class="login-container">
        <h2>请登录</h2>
        <button class="login-button" @click="handleLogin">登录</button>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function handleLogin() {
    localStorage.setItem('token', 'user-token');
    router.push('/home');
}
</script>

<style scoped>
.login-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f2f5;
    padding: 20px;
    text-align: center;
}

h2 {
    font-size: 2rem;
    color: #2c3e50;
    margin-bottom: 20px;
}

.login-button {
    padding: 10px 20px;
    font-size: 1.2rem;
    color: #fff;
    background-color: #3498db;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.login-button:hover {
    background-color: #2980b9;
    transform: scale(1.05);
}
</style>
