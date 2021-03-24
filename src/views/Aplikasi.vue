<template>
  <div class="aplikasi">
    <Navbar/>
    <section class="daftar-aplikasi">
        <div class="container">
            <div class="row justify-content-center">
                <div v-for="myApp in app" v-bind:key="myApp.id" class="col-xl-3 col-12">
                    <div class="menu-card">
                      <i v-bind:class="myApp.icon"></i>
                      <h5>{{myApp.nama}}</h5>
                      <a href="#" class="btn btn-open">Buka Aplikasi</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Aplikasi',
  data: function(){
      return{
        app:[
          { 
            id: 1,
            nama: "Ibadah",
            icon: "fas fa-mosque fa-3x"
          },{ 
            id: 2,
            nama: "J&T Tracking",
            icon: "fas fa-truck fa-3x"
          },{ 
            id: 3,
            nama: "Diary",
            icon: "fas fa-sticky-note fa-3x"
          },{ 
            id: 4,
            nama: "Library ",
            icon: "fas fa-book fa-3x"
          }
        ]
      }
  },
  components: {
    Navbar,
    Footer
  }
}
</script>


<style scoped>
.daftar-aplikasi {
    padding-top:40px;
    padding-bottom:100px;
    background-color: #C8E6FF;
}

.title-card {
  padding: 30px 10px;
  text-align:center;
  border-radius: 20px;
  margin-bottom: 15px;
  background-color: #fff;
  color: #4A4A4A;
  transition: 300ms ease-in-out;
}
.title-card:hover {
  background-color: #1e5079;
  color: #fff;
  transition: 300ms ease-in-out;
}
.active {
  background-color: #1E639D;
  color: #fff;
}
.active:hover {
  background-color: #1e5079;
  color: #fff;
}
.title-card h5 {
  font-weight:700;
  font-size:20px;
  margin-top:20px;
  margin-bottom:20px;
}
.btn-open {
    background-color:#3CA5FF!important;
    border-style: none!important;
    font-size: 14px!important;
    font-weight: 600!important;
    padding: 8px 20px!important;
    border-radius:12px!important;
    color:white;
}
.btn-open:hover{
    background-color:#2e92eb!important;
}
</style>
