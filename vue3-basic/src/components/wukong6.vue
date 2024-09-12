<template>  
    <div class="container" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh;">  
      <h1 class="title">装备管理</h1>  
      <div class="input-group">  
        <input type="text" v-model="newEquipmentName" placeholder="输入装备名" />  
        <button @click="addEquipment" class="add-button">添加</button>  
      </div>  
      <div class="equipment-list">  
        <div v-for="(equipment, index) in equipments" :key="index" class="equipment-item">  
          <span>{{ equipment }}</span>  
          <button @click="removeEquipment(index)" class="delete-button">删除</button>  
        </div>  
      </div>  
    </div>  
  </template>  
    
  <script>  
  export default {  
    data() {  
      return {  
        newEquipmentName: '',  
        equipments: []  
      };  
    },  
    methods: {  
      addEquipment() {  
        if (this.newEquipmentName.trim() !== '') {  
          this.equipments.push(this.newEquipmentName);  
          this.newEquipmentName = ''; // 清空输入框  
        } else {  
          alert('请输入装备名！');  
        }  
      },  
      removeEquipment(index) {  
        this.equipments.splice(index, 1);  
      }  
    }  
  };  
  </script>  
    
  <style scoped>  
  .container {  
    background-color: #8eec97; /* 草绿色背景 */  
    font-family: '宋体', sans-serif; /* 字体为宋体 */  
    color: black; /* 字体颜色为黑色 */  
  }  
    
  .title {  
    margin-bottom: 10px; /* 标题与下方元素的间距 */  
  }  
    
  .input-group {  
    display: flex;  
    flex-direction: column;  
    align-items: center;  
  }  
    
  .input-group input {  
    margin-bottom: 20px; /* 文本框与添加按钮的间距 */  
  }  
    
  .add-button,  
  .delete-button {  
    background-color: rgb(48, 224, 180); /* 按钮背景色为橙色 */  
    border: none; /* 移除边框 */  
    color: white; /* 文字颜色为白色 */  
    padding: 10px 20px; /* 内边距 */  
    cursor: pointer; /* 鼠标悬停时显示手指形状 */  
  }  
    
  .equipment-list {  
    margin-top: 10px; /* 装备列表与上方元素的间距 */  
  }  
    
  .equipment-item {  
    display: flex;  
    align-items: center;  
  }  
    
  .equipment-item span {  
    margin-right: 10px; /* 装备名与删除按钮的间距 */  
  }  
  </style>