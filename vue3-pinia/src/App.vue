<template>
  <div class="app-container">
    <nav class="nav-bar">
      <router-link to="/counter" :class="{ 'nav-link': true, 'active': $route.path === '/counter' }">计数器</router-link>
      <router-link to="/todo" :class="{ 'nav-link': true, 'active': $route.path === '/todo' }">待办清单</router-link>
      <router-link to="/record" :class="{ 'nav-link': true, 'active': $route.path === '/record' }">记账应用</router-link>
    </nav>

    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* 布局相关样式 */
.app-container {
  text-align: center;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

.nav-bar {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  font-size: 18px;
}

.nav-link {
  text-decoration: none;
  color: #333;
  padding: 5px 10px;
  border-radius: 5px;
}

.nav-link:hover {
  background-color: #f0f0f0;
}

.nav-link.active {
  color: #fff;
  background-color: #00aaff;
  font-weight: bold;
}

/* 内容区域样式 */
.content {
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

input,
select,
button {
  margin: 5px 0;
  padding: 8px;
  font-size: 1rem;
}

button {
  background-color: #00aaff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0088cc;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
  font-size: 1.1rem;
}

li button {
  margin-left: 10px;
  background-color: #ff4c4c;
}

li button:hover {
  background-color: #cc0000;
}

/* 统计信息 */
.stats {
  margin-top: 20px;
  font-size: 1.2rem;
}

.stats p {
  margin: 5px 0;
}
</style>
