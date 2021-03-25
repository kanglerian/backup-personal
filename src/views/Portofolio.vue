<template>
  <div class="portofolio">
    <Navbar/>
    <section class="daftar-portofolio">
      <div class="container">
            <div class="row justify-content-center mb-4">
              <div class="col-xl-5 col-12">
                <h2 class="katalog-title">Portofolio</h2>
                <hr>
                <p>Ini adalah contoh dari Project yang pernah dikerjakan bidang Website, UI dan UX, maupun Desain Grafis.</p>
              </div>
            </div>
            <div class="row justify-content-center">
                <div v-for="myPorto in portofolio" v-bind:key="myPorto.id" class="col-xl-4 col-12">
                    <div class="menu-card">
                        <img v-bind:src="'/assets/thumbs/' + myPorto.thumb" class="img-fluid">
                        <div class="row justify-content-between">
                          <div class="col-auto">
                            <h5 class="menu-title">{{ myPorto.name }}.</h5>
                            <p class="menu-desc">Untuk {{ myPorto.desc }}.</p>
                            <hr>
                          </div>
                        <hr class="mb-3">
                        <div class="row justify-content-between">
                          <div class="col-auto">
                            <div v-if="myPorto.category === 'Design'" class="col-auto">
                              <p class="porto-card" style="background: #27BDC7;">{{ myPorto.category }}</p>
                            </div>
                            <div v-else-if="myPorto.category === 'Website'" class="col-auto">
                              <p class="porto-card" style="background: #FF737E;">{{ myPorto.category }}</p>
                            </div>
                            <div v-else-if="myPorto.category === 'UI & UX Design'" class="col-auto">
                              <p class="porto-card" style="background: #FB9103;">{{ myPorto.category }}</p>
                            </div>
                            <div v-else class="col-auto">
                              <p class="porto-card" style="background: #E8E8E8;">{{ myPorto.category }}</p>
                            </div>
                            </div>
                          </div>
                          <div class="col-auto">
                            <a href="#" class="btn btn-open" v-bind:class="{ disabled: myPorto.isDisabled}">Open Project</a>
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
  name: 'Portofolio',
  data: function(){
      return{
        portofolio:[
          {
            id:1,
            name: "Ibadah Apps",
            thumb:"default.png",
            desc: "Ini adalah aplikasi yang berisi panduan Ibadah",
            category: "Website",
            isDisabled:true
          },{
            id:2,
            name: "SMK Manangga Pratama",
            thumb:"default.png",
            desc: "Website resmi dari SMK Manangga Pratama Tasikmalaya",
            category: "Website",
            isDisabled:true
          },{
            id:3,
            name: "Si Kecil Apps",
            thumb:"default.png",
            desc: "Website resmi dari Organisasi yang memperhatikan kesehatan anak",
            category: "Website",
            isDisabled:true
          },{
            id:4,
            name: "Juragan Food",
            thumb:"default.png",
            desc: "Website resmi dari PT. Codale Food Indonesia",
            category: "Website",
            isDisabled:true
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
.daftar-portofolio {
  padding-top:50px;
  padding-bottom: 80px;
  background-color: #C8E6FF;
}

.porto-card {
  text-align:center;
  padding:5px 10px;
  font-weight: 300;
  color:#FFF;
  font-size:14px;
  border-radius:5px;
}
</style>