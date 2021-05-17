<template>
  <div class="portofolio">
    <Navbar />
    <section class="daftar-portofolio" style="overflow:hidden;">
      <div class="container">
        <div class="row justify-content-center mb-4">
          <div class="col-xl-5 col-12">
            <h2 class="katalog-title" data-aos="fade-up">
              Portofolio <span class="badge badge-info">{{ portofolio.length }}</span>
            </h2>
            <hr data-aos="fade-up" data-aos-delay="100" />
            <p data-aos="fade-left" data-aos-delay="200">Ini adalah contoh dari Project yang pernah dikerjakan bidang Website, UI dan UX, maupun Desain Grafis.</p>
          </div>
        </div>
        <div class="row justify-content-center">
          <div v-for="myPorto in portofolio" v-bind:key="myPorto.id" class="col-xl-4 col-12">
            <div class="menu-card" data-aos="fade-up">
              <img v-bind:src="'/assets/thumbs/' + myPorto.thumb" class="img-fluid" loading="lazy" data-aos="flip-left" data-aos-delay="100" />
              <div class="row justify-content-between">
                <div class="col-auto">
                  <h5 class="menu-title">{{ myPorto.name }}</h5>
                  <p class="menu-desc">Untuk {{ myPorto.desc }}.</p>
                  <hr />
                </div>
                <hr class="mb-3" />
                <div class="row justify-content-between">
                  <div class="col-auto">
                    <div v-if="myPorto.category === 'Design'" class="col-auto">
                      <p class="porto-card" style="background: #27BDC7;">{{ myPorto.category }}</p>
                    </div>
                    <div v-else-if="myPorto.category === 'Website'" class="col-auto">
                      <p class="porto-card" style="background: #FB9103;">{{ myPorto.category }}</p>
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
                  <a v-bind:href="myPorto.link" class="btn btn-open" target="_blank" v-bind:class="{ disabled: myPorto.isDisabled }">Open Project</a>
                </div>
              </div>
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
  name: "Portofolio",
  data: function() {
    return {
      portofolio: [
        {
          id: 1,
          name: "Shalih Apps",
          thumb: "shalihapps.jpg",
          desc: "Aplikasi ini memuat panduan ibadah harian 😄",
          category: "Website",
          link: "http://www.kanglerian.com/shalihapps/",
          isDisabled: false,
        },
        {
          id: 2,
          name: "SMK Manangga Pratama",
          thumb: "default.png",
          desc: "Website resmi dari SMK Manangga Pratama Tasikmalaya",
          category: "Website",
          isDisabled: true,
        },
        {
          id: 3,
          name: "Si Kecil Apps",
          thumb: "default.png",
          desc: "Website resmi dari Organisasi yang memperhatikan kesehatan anak",
          category: "Website",
          isDisabled: true,
        },
        {
          id: 4,
          name: "Juragan Food",
          thumb: "default.png",
          desc: "Website resmi dari PT. Codale Food Indonesia",
          category: "Website",
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
.daftar-portofolio {
  padding-top: 110px;
  padding-bottom: 80px;
  background-color: #fdfdfd;
  color: #303030 !important;
}

.porto-card {
  text-align: center;
  padding: 5px 10px;
  font-weight: 300;
  color: #fff;
  font-size: 14px;
  border-radius: 5px;
}
</style>
