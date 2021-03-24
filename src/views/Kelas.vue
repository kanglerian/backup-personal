<template>
  <div class="kelas">
    <Navbar/>
    <section class="daftar-kelas">
        <div class="container">
            <div class="row justify-content-center mb-4">
              <div class="col-xl-5 col-12">
                <h2 class="katalog-title">Katalog Kelas</h2>
                <hr>
                <p>Jangan mau kalah update dengan yang lainnya. Yuk ikuti perkembangan teknologi.</p>
                <div class="search-bar mb-4">
                  <input type="text" class="search-input" placeholder="Cari kelas.." autofocus>
                  <a href="#" class="search-icon"><i class="fas fa-search"></i></a>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
                <div v-for="myClass in kelas" v-bind:key="myClass.id" class="col-xl-4 col-12">
                    <div class="menu-card">
                        <img v-bind:src="'/assets/thumbs/' + myClass.thumb" class="img-fluid">
                        <div class="row justify-content-between">
                          <div class="col-auto">
                            <h5 class="menu-title">{{ myClass.nama }}.</h5>
                            <p class="menu-desc">Untuk {{ myClass.level }}.</p>
                          </div>
                          <div class="col-auto">
                            <p class="package-card" v-bind:style="{background: myClass.colorPackage }">{{ myClass.package }}</p>
                          </div>
                        </div>
                        <hr class="mb-3">
                        <div class="row justify-content-between">
                          <div class="col-auto">
                            <p class="menu-old-price"><del>Rp{{myClass.hargaLama}}</del></p>
                          </div>
                          <div class="col-auto">
                            <p class="menu-price">Rp{{myClass.harga}}</p>
                          </div>
                        </div>
                        <hr class="mb-3">
                        <div class="row justify-content-between">
                          <div class="col-auto">
                            <p class="menu-time"><i class="fas fa-check-circle" style="color:#28D06B;" ></i> {{ myClass.time }}</p>
                          </div>
                          <div class="col-auto">
                            <a href="#" class="btn btn-open" v-bind:class="{ disabled: myClass.isDisabled}">Ikut Kelas</a>
                          </div>
                        </div>
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
  name: 'Kelas',
  data: function(){
        return {
            kelas:[
          { 
            id: 1,
            thumb:'figma-dasar.png',
            nama: "Figma Dasar",
            level: "Semua",
            package: "Gratis",
            colorPackage:"#27BDC7",
            hargaLama: "100.000",
            harga: "0",
            time: "Akses selamanya",
            isDisabled: false,
          },{ 
            id: 2,
            thumb:'html-dasar.png',
            nama: "HTML5 Dasar",
            level: "Semua",
            package: "Gratis",
            colorPackage:"#27BDC7",
            hargaLama: "100.000",
            harga: "0",
            time: "Akses selamanya",
            isDisabled: true,
          },{ 
            id: 3,
            thumb:'ae-dasar.png',
            nama: "Motion Graphic Dasar",
            level: "Semua",
            package: "Premium",
            colorPackage:"#FF737E",
            hargaLama: "200.000",
            harga: "100.000",
            time: "Berlangganan",
            isDisabled: true,
          },{ 
            id: 4,
            thumb:'pr-dasar.png',
            nama: "Video Editing Dasar",
            level: "Semua",
            package: "Premium",
            colorPackage:"#FF737E",
            hargaLama: "200.000",
            harga: "100.000",
            time: "Berlangganan",
            isDisabled: true,
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
.daftar-kelas {
    padding-top:40px;
    padding-bottom:100px;
    background-color: #C8E6FF;
}
.package-card {
  text-align:center;
  padding:5px 10px;
  font-weight: 300;
  color:#000;
  font-size:14px;
  border-radius:5px;
}
</style>
