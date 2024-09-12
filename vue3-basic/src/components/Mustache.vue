<template>
     <div>
    <h2>{{ name }}</h2>
     <h3>{{ title }}</h3>
     <p>{{ description }}</p >
    </div>
    </template>
    
    <script setup>
    import {ref} from 'vue'
    
    const name=ref('孙悟空')
    const title=ref('齐天大圣')
    const description=ref('在《西游记》中，孙悟空是一个勇敢无畏，机智聪明的角色，以其强大的能力和不屈的精神著名')
    </script>
    
    <style>
    h2{
        font-size: 44px;
        color: crimson;
        margin-bottom: 12px;
    }
    
    </style>