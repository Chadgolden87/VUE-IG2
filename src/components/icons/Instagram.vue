<script setup>
import { ref } from 'vue'
const props = defineProps(['profiles'])

const liked =ref(false)
const likeCount= ref(props.profiles.likes)

function likeDat(){
  liked.value = true

  likeCount.value = liked.value ?
  likeCount.value +1 : likeCount.value -1;

  likeUnlike()
  }

  function unlikeDat(){
    liked.value = false
    likeCount.value = liked.value ?
    likeCount.value +1 : likeCount.value -1;

    likeUnlike()

  }


  function likeUnlike(){
  fetch(`https://66ccd18b8ca9aa6c8cc8cbc0.mockapi.io/post/${props.profiles.id}`, {
  method: 'PUT',
  headers: {
    Accept: "applications,json",
      "Content-Type": "application/json"
    },

    body: JSON.stringify({ likes: likeCount.value })
    
    
})
  .then(response => response.json()) 

   
  .then(data => {
    console.log(data)
  })}



</script>

<template>
 <div class="flex-container">
    <div class="card">
        <div class="top-bar">
            <img class="user-image" :src="profiles.userimage">
            <h2 class="userName">{{ profiles.username }}</h2>
        </div>
        <div>
        <img class="post-image" :src="profiles.postimage">
        </div>
        <div class=likes>
            <img @click="unlikeDat()" class="likeCount" v-if="liked" src="https://purepng.com/public/uploads/large/heart-icon-y1k.png" alt="">
            <img @click="likeDat()" class="unlikeCount" v-else src="https://purepng.com/public/uploads/large/heart-icon-y1k.png">
            <h3>{{ likeCount }}</h3>
        </div>
        <div class="caption"> <span class="nameComment"> {{ profiles.username }}:</span> {{ profiles.caption }}</div>
    </div>



  </div>

</template>

<style scoped>


.flex-container {

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 55px;
}

.top-bar {
    display: flex;
    width: 600px;
    height: 50px;
    padding: 12px;
    padding-top: 20px;
    padding-left: 15px;
}

.card {
    border: 1px solid black;
    box-shadow: 5px 10px 10px black;
    width: 600px;
}

.user-image {
    border-radius: 50%;
    height: 45px;
    width: 45px;
}

.userName {
    font-size: large;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    padding-left: 10px;
    padding-top: 10px;
}

.post-image {
    width: 598px;
    height: 500px;
    padding-bottom: 0px;
    margin-bottom: -10px;
}

.caption {
font-family: Arial, Helvetica, sans-serif;
font-weight: 500;
/* padding: 5px; */
padding-left: 5px;
padding-bottom: 10px;
margin-top: -10px;
}

.likes {
    display: flex;
    flex-direction: row;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 700;
    padding: 12px;
    padding: top;
    /* justify-content: */
    

}

.likeCount {
    width: 30px;
    height: 30px;
    margin-top: 12px;
    margin-right: 10px;

}

.unlikeCount {
    width: 30px;
    height: 30px;
    margin-top: 12px;
    margin-right: 10px;
    opacity: 0.2;
} 

.nameComment {
    font-weight: 600;
}
</style>
