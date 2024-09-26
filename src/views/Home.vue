<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import Instagram from '../components/icons/Instagram.vue';
import {reactive} from 'vue'
const newPostArray = reactive([])

fetch('https://66ccd18b8ca9aa6c8cc8cbc0.mockapi.io/post')
.then(response => {
  return response.json()
})

.then(newPost => {
  newPostArray.push(...newPost)
  // console.log(newPost)
})

</script>

<template>
<!-- <div class="container">
  <div class="menu">

  <div class="newPost"> -->
    <!-- <RouterLink to="/" class="newPost">Home</RouterLink>
    <img class="image" src="/Users/chadgolden/Vue-IG Project/src/assets/Instagram-app-logo.jpg">
     -->
    <!-- <RouterLink to="/newPost" class="newPost">New Post</RouterLink> -->
  
  <!-- </div>
  </div> -->
  <div>
  <Instagram v-for="igPost in newPostArray" :profiles = "igPost"></Instagram>
  
  </div>


  </template>

<style scoped>
.heading {
  text-align: center;
  margin-top: 40px;
  

}

.container {
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* width: 1000px; */
  width: 100%;
  /* margin-top: 50px; */
  
}

.newPost {

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: large;
  width: 100%;
  margin-right: 20px;
  color: blue;
  font-size: larger;
  text-decoration: underline;

}

.button {
  background-color: white;
  box-shadow: none;


}

.image {

  height: 250px;
  width: 300px;
  
  
}

.menu {
  width: 100%;
}
</style>

