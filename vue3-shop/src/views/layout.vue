<template>
    <div class="layout-container">
        <nav class="nav-bar">
            <router-link to="/home" class="nav-link">首页</router-link>
            <router-link to="/books" class="nav-link">书籍展示</router-link>
            <router-link to="/cart" class="nav-link">购物车</router-link>
            <router-link to="/user" class="nav-link">用户中心</router-link>
        </nav>

        <transition name="fade" mode="out-in">
            <router-view />
        </transition>
    </div>
</template>

<style scoped>
.layout-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f9f9f9;
    min-height: 100vh;
}

.nav-bar {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
    background-color: #2c3e50;
    padding: 10px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.nav-link {
    color: #ecf0f1;
    text-decoration: none;
    font-weight: bold;
    padding: 10px 15px;
    border-radius: 4px;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.nav-link:hover {
    background-color: #3498db;
    transform: scale(1.05);
}

.nav-link.router-link-active {
    background-color: #1abc9c;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
