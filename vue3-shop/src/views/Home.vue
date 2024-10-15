<template>
    <div class="home-container">
        <h1 class="home-title">线上图书商城</h1>
        <p class="home-welcome">欢迎来到新华书店</p>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.home-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    text-align: center;
}

.home-title {
    font-size: 3em;
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.home-welcome {
    font-size: 1.8em;
    color: #3498db;
    font-style: italic;
}

.home-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.5);
    z-index: -1;
    backdrop-filter: blur(5px);
}
</style>
