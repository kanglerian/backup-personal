<template>
  <div class="blog">
    <Navbar />

    <section class="daftar-post" style="overflow:hidden;">
      <div class="container">
        <div class="row justify-content-center mb-4">
          <div class="col-xl-5 col-12">
            <h2 class="katalog-title" data-aos="fade-up">
              Blog <span class="badge badge-info">{{ post.length }}</span>
            </h2>
            <hr data-aos="fade-up" data-aos-delay="100" />
            <p data-aos="fade-left" data-aos-delay="200">
              Halo! ini adalah personal blog, yang dimana isinya ada tutorial, sharing atau catatan-catatan. Atau bisa kunjungi di
              <a href="http://www.blog.kanglerian.com" target="_blank"><span class="badge badge-info">blog.kanglerian.com</span></a>
            </p>
          </div>
        </div>
        <div class="row justify-content-center">
          <div v-for="myPost in post" v-bind:key="myPost.id" class="col-xl-4 col-12">
            <div class="menu-card" data-aos="fade-up">
              <img v-bind:src="'/assets/thumbs/' + myPost.thumb" class="img-fluid" loading="lazy" data-aos="flip-left" data-aos-delay="100" />
              <div class="row justify-content-between">
                <div class="col-auto">
                  <h5 class="menu-title">{{ myPost.name }}</h5>
                  <p class="menu-desc">{{ myPost.desc }}</p>
                  <hr />
                </div>
                <hr class="mb-3" />
                <div class="row justify-content-between">
                  <div class="col-auto">
                    <div v-if="myPost.category === 'Tips'" class="col-auto">
                      <p class="blog-badge" style="background: #27BDC7;">{{ myPost.category }}</p>
                    </div>
                    <div v-else-if="myPost.category === 'Tutorial'" class="col-auto">
                      <p class="blog-badge" style="background: #FB9103;">{{ myPost.category }}</p>
                    </div>
                    <div v-else-if="myPost.category === 'UI & UX Design'" class="col-auto">
                      <p class="blog-badge" style="background: #FB9103;">{{ myPost.category }}</p>
                    </div>
                    <div v-else class="col-auto">
                      <p class="blog-badge" style="background: #E8E8E8;">{{ myPost.category }}</p>
                    </div>
                  </div>
                </div>
                <div class="col-auto">
                  <a v-bind:href="myPost.link" class="btn btn-open" target="_blank" v-bind:class="{ disabled: myPost.isDisabled }">Buka catatan</a>
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
  name: "Blog",
  data: function() {
    return {
      post: [
        {
          id: 1,
          name: "Belajar Vue JS",
          thumb: "vueNotes.jpg",
          desc: "Catatan untuk belajar Vue JS dari dasar 😄",
          category: "Tutorial",
          link: "http://www.kanglerian.com/belajarVueJS",
          isDisabled: false,
        },
        {
          id: 2,
          name: "Tips Karir",
          thumb: "careerNotes.jpg",
          desc: "Catatan untuk Tips karir, terus di push 😄",
          category: "Tips",
          link: "http://www.kanglerian.com/career-notes",
          isDisabled: false,
        },
        {
          id: 3,
          name: "Belajar PHP",
          thumb: "phpNotes.jpg",
          desc: "Catatan untuk belajar PHP dari dasar 😄",
          category: "Tutorial",
          link: "http://www.kanglerian.com/belajarPHP",
          isDisabled: false,
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
.daftar-post {
  padding-top: 110px;
  padding-bottom: 80px;
  background-color: #fdfdfd;
  color: #303030 !important;
}

.blog-badge {
  text-align: center;
  padding: 5px 10px;
  font-weight: 300;
  color: #fff;
  font-size: 14px;
  border-radius: 5px;
}
</style>
