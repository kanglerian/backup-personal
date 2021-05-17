<template>
  <div class="aplikasi">
    <Navbar />
    <section class="daftar-aplikasi" style="overflow:hidden">
      <div class="container">
        <div class="row justify-content-center mb-4">
          <div class="col-xl-8 col-12">
            <h2 class="katalog-title" data-aos="fade-up">
              Katalog Aplikasi <span class="badge badge-info">{{ app.length }}</span>
            </h2>
            <hr data-aos="fade-down" data-aos-delay="100" />
            <p data-aos="fade-left" data-aos-delay="200">Aplikasi ini membantu untuk mempermudah hidup, InsyaaAllaah 😄</p>
            <div class="search-bar mb-4" data-aos="fade-right" data-aos-delay="300">
              <input type="text" class="search-input" placeholder="Cari aplikasi.." />
              <a href="#" class="search-icon" data-toggle="modal" data-target="#notAvailable"><i class="fas fa-search"></i></a>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div v-for="myApp in app" v-bind:key="myApp.id" class="col-xl-4 col-12">
            <div class="menu-card" data-aos="fade-up">
              <img v-bind:src="'/assets/thumbs/' + myApp.thumb" class="img-fluid rounded" loading="lazy" data-aos="flip-left" data-aos-delay="100" />
              <h5 class="menu-title">{{ myApp.nama }}</h5>
              <p class="menu-desc">{{ myApp.desc }}</p>
              <a v-bind:href="myApp.link" class="btn btn-open" target="_blank" v-bind:class="{ disabled: myApp.isDisabled }">Buka Aplikasi</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Aplikasi",
  data: function() {
    return {
      app: [
        {
          id: 1,
          nama: "ShalihApps",
          desc: "Aplikasi ini memuat panduan ibadah harian 😄",
          thumb: "shalihapps.jpg",
          link: "http://www.kanglerian.com/shalihapps/",
          isDisabled: false,
        },
        {
          id: 2,
          nama: "J&T Tracking",
          desc: "Cari barangmu yang dikirim J&T udah sampe mana? 😄",
          thumb: "default.png",
          isDisabled: true,
        },
        {
          id: 3,
          nama: "Diary",
          desc: "Tulis apa aja kegiatanmu seharian ini dan jadilah orang yang disiplin! 🧑🏼‍💻",
          thumb: "default.png",
          isDisabled: true,
        },
        {
          id: 4,
          nama: "Library",
          desc: "Koleksi buku kamu ada apa aja, cek disini! 😄",
          thumb: "default.png",
          isDisabled: true,
        },
      ],
    };
  },
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
.daftar-aplikasi {
  padding-top: 110px;
  padding-bottom: 100px;
  background-color: #fdfdfd;
  color: #303030 !important;
}

.title-card {
  padding: 30px 10px;
  text-align: center;
  border-radius: 20px;
  margin-bottom: 15px;
  background-color: #fff;
  color: #4a4a4a;
  transition: 300ms ease-in-out;
}
.title-card:hover {
  background-color: #1e5079;
  color: #fff;
  transition: 300ms ease-in-out;
}
.active {
  background-color: #1e639d;
  color: #fff;
}
.active:hover {
  background-color: #1e5079;
  color: #fff;
}
.title-card h5 {
  font-weight: 700;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
