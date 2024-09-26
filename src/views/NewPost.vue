<script setup>
import { reactive } from 'vue';
import Instagram from '@/components/icons/Instagram.vue';
import { useRouter } from 'vue-router';
const newPostArray = reactive([])


function addPost(){
  // console.log('addPost')

  let options = {
    method: "POST",
    body: JSON.stringify({
      username: username,
      userimage: userimage,
      postimage: postimage,
      likes: likes,
      caption: caption
  
  }),
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"

  }
}
  
  fetch('https://66ccd18b8ca9aa6c8cc8cbc0.mockapi.io/post', options)
  .then(response => {
  return response.json()
})

.then(newPost => {
  newPostArray.push(...newPost)
  // console.log(newPost)
})
} 

let username = ""
let userimage = ""
let postimage = ""
let likes = ""
let caption = ""

</script>

<template>

  
<div class="create">
    <div class="addTo">
      <label for="userName">User Name:</label>
      <br>
      <input name="userName" type="text" id="userName" placeholder="User Name" v-model="username">
      <br>
      <label for="userimage">User Image:</label>
      <br>
      <input name="userimage" type="text" placeholder="User Image" v-model="userimage">
      <br>
      <!-- <br> -->
      <label for="postimage">Post Image:</label>
      <br>
      <!-- <br> -->
      <input name="postimage" type="text" placeholder="Image Link" v-model="postimage">
      <br>
      <label for="likes">Likes:</label>
      <br>
      <input name="likes" type="text" placeholder="Likes Here" v-model="likes">
      <br>

      <label for="caption">Caption:</label>
      <br>
      <!-- <br> -->
      <input name="caption" type="text" placeholder="Caption Here" v-model="caption">
      <br>
      <button @click="addPost()">Submit</button>
    </div>
    <div>
      
    </div>
  </div>

      <!-- <Instagram v-for="item in newPostArray" :newPost="item"></Instagram> -->

</template>

<style scoped>

body {
  display: flex;
  justify-content: center;
  background-color: blue;
}

.addTo {
  display: flex;
  flex-direction: column;
  width: 250px;
  align-items: center;
  font-weight: 600;  
  justify-content: center;

}

.create {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>