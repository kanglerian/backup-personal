<template>
  <div class="banner">
     <section>
        <div class="container">
            <div class="row">
                <div class="col-xl-5 col-12">
                    <div class="profile-container">
                        <img v-bind:src="'/assets/img/'+ photo +'.png'" class="profile-picture">
                        <h5 class="profile-name">{{firstName}} {{ lastName }} </h5>
                        <p class="profile-title">{{ title }}</p>
                        <p class="profile-bio">“{{ bio }}.”</p>
                        <p><span v-bind:class="[isAvailable ? availableClass : '', errorClass]"> {{ isAvailable ? 'Available' : 'Not Available' }}</span></p>
                        <a href="https://wa.me/6281286501015" target="_blank" class="btn btn-primary">chat me!</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>

export default {
    
  name: 'Banner',
  data: function(){
      return {
        firstName: 'Lerian',
        lastName: 'Febriana',
        title: 'Web Developer',
        bio: 'create a website for personal or business purposes, with a professional team',
        isAvailable: true,
        availableClass : 'badge badge-success',
        errorClass : 'badge badge-success',
        photo: 'photo-2',
      }
  },
}
</script>

<style scoped>

.profile-container {
    background-color:#FFFFFF;
    text-align: center;
    padding: 30px 50px;
    border-radius: 25px;
    margin-bottom: 50px;
    box-shadow: 0px 60px 80px rgba(60, 165, 255, 0.25);
}
.profile-picture {
    margin-bottom: 8px;
    width: 50%;
}
.profile-name{
    font-weight: 700;
    color: #4A4A4A;
    font-size: 25px;
}
.profile-title {
    font-weight: 400;
    font-size:17px;
    color: #9b9b9b;
    margin-top:-10px;
}
.profile-bio {
    color: #4A4A4A;
    font-size:17px;
}
.active {
    color: green;
}
@media (min-width: 1200px) {
    .profile-container{
        box-shadow: 0px 60px 80px rgba(0, 111, 200, 0.05);
    }
 }
</style>
