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
                <div class="input-group mb-4">
                  <div class="input-group-prepend">
                    <div class="input-group-text"><i class="fas fa-search"></i></div>
                  </div>
                  <input type="text" class="form-control" placeholder="Cari kelas..">
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
                <div v-for="myClass in kelas" v-bind:key="myClass.id" class="col-xl-4 col-12">
                    <div class="menu-card">
                        <img v-bind:src="'/assets/thumbs/' + myClass.thumb" class="img-fluid">
                        <div class="row justify-content-between">
                          <div class="col-auto">
                            <h5 class="kelas-title">{{ myClass.nama }}.</h5>
                            <p class="kelas-desc">Untuk {{ myClass.level }}.</p>
                          </div>
                          <div class="col-auto">
                            <p class="package-card" v-bind:style="{background: myClass.colorPackage }">{{ myClass.package }}</p>
                          </div>
                        </div>
                        <hr class="mb-3">
                        <div class="row justify-content-between">
                          <div class="col-auto">
                            <p class="kelas-old-price"><del>Rp{{myClass.hargaLama}}</del></p>
                          </div>
                          <div class="col-auto">
                            <p class="kelas-price">Rp{{myClass.harga}}</p>
                          </div>
                        </div>
                        <hr class="mb-3">
                        <div class="row justify-content-between">
                          <div class="col-auto">
                            <p class="kelas-time"><i class="fas fa-check-circle" style="color:#28D06B;" ></i> {{ myClass.time }}</p>
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
            colorPackage:"#39A1A8",
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
            colorPackage:"#39A1A8",
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
            colorPackage:"#EF5B67",
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
.katalog-title, .kelas-title, .kelas-price, .kelas-old-price{
  font-weight: 700;
}
.kelas-title, .kelas-price, .kelas-old-price {
  font-size: 17px;
}
.kelas-old-price{
  color:#9c9c9c;
}
.kelas-desc{
  color:#9c9c9c
}
.btn-open {
    background-color:#EF5B67!important;
    border-style: none!important;
    font-size: 14px!important;
    font-weight: 600!important;
    padding: 8px 20px!important;
    border-radius:12px!important;
    color:white;
}
.btn-open:hover{
    background-color:#c0444e!important;
}
.img-fluid {
    margin-bottom:15px;
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
