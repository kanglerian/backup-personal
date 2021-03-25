<template>
  <div class="daftar-hobbies">
     <section>
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-xl-6 col-12">
                    <carousel
                        :loop="true"
                        :nav="false"
                        :autoplay="true"
                        :items="1"
                    >
                        <div v-for="myHobby in hobbies" v-bind:key="myHobby.id" class="image-hobbies rounded">
                            <img v-bind:src="'/assets/thumbs/'+ myHobby.thumb" class="img-fluid rounded">
                        </div>
                    </carousel>
                </div>  
                <div class="col-xl-6 col-12 text-left">
                    <div>
                        <h5 class="hobbies-title">My Hobbies</h5>
                        <hr>
                        <p class="hobbies-desc">Hello! This is my hobby, including playing games, sports such as taekwondo, swimming and cycling. Besides that, I like to learn new things, especially in the IT field and like gardening.</p>
                        <hr>
                        <div class="hobbies-game">
                            <img src="/assets/img/point-blank.png" height="80px" alt="">
                            <img src="/assets/img/township.png" height="80px" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>

import carousel from 'vue-owl-carousel'

export default {
  name: 'Hobbies',
  data: function(){
      return{
          hobbies:[
              {
                  id:1,
                  thumb:"default.png"
              },{
                  id:2,
                  thumb:"default.png"
              },
          ]
      }
  },
  components:{carousel}
}
</script>

<style scoped>
.daftar-hobbies{
  padding:50px 0px;
}
.hobbies-title{
  font-weight: 700;
  font-size: 25px;
  color:#4A4A4A;
}
.hobbies-desc {
  color:#4A4A4A;
}
.hobbies-game img{
    margin:10px 20px;
}
</style>
