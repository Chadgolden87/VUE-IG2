<script setup>
// import { RouterView } from 'vue-router';


</script>

<template>
    <header>
      <RouterLink to="/">
 <img class="image" src="./assets/Instagram-app-logo.jpg">
      </RouterLink>
      <RouterLink to="/newPost" class="newPost">New Post</RouterLink>
</header>

<router-view/>
</template>

<style scoped>
header {
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* width: 1000px; */
  width: 100%;
  margin-bottom: 50px;
}

.image {

height: 250px;
width: 300px;

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



</style>