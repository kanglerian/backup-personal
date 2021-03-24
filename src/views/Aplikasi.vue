<template>
  <div class="aplikasi">
    <Navbar/>
    <section class="daftar-aplikasi">
        <div class="container">
            <div class="row justify-content-center mb-4">
              <div class="col-xl-5 col-12">
                <h2 class="katalog-title">Katalog Aplikasi</h2>
                <hr>
                <p>Aplikasi ini membantu untuk mempermudah hidup, InsyaaAllaah 😄</p>
                <div class="search-bar mb-4">
                  <input type="text" class="search-input" placeholder="Cari aplikasi.." autofocus>
                  <a href="#" class="search-icon"><i class="fas fa-search"></i></a>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
                <div v-for="myApp in app" v-bind:key="myApp.id" class="col-xl-4 col-12">
                    <div class="menu-card">
                      <img v-bind:src="'/assets/thumbs/' + myApp.thumb" class="img-fluid">
                      <h5 class="menu-title">{{myApp.nama}}</h5>
                      <p class="menu-desc">{{ myApp.desc }}</p>
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
            desc: "Aplikasi ini memuat panduan ibadah harian 😄",
            thumb: "default.png"
          },{ 
            id: 2,
            nama: "J&T Tracking",
            desc: "Cari barangmu yang dikirim J&T udah sampe mana? 😄",
            thumb: "default.png"
          },{ 
            id: 3,
            nama: "Diary",
            desc: "Tulis apa aja kegiatanmu seharian ini dan jadilah orang yang disiplin! 🧑🏼‍💻",
            thumb: "default.png"
          },{ 
            id: 4,
            nama: "Library",
            desc: "Koleksi buku kamu ada apa aja, cek disini! 😄",
            thumb: "default.png"
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
</style>
