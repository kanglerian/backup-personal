<template>
  <div class="daftar-tools">
    <section style="overflow:hidden;">
      <div class="container">
        <carousel :nav="false" :loop="true" :autoplay="true" :items="3" :responsive="{ 0: { items: 3 }, 1200: { items: 7 } }">
          <div class="logo-tools" data-aos="fade-up" data-aos-delay="100">
            <i class="fab fa-html5 fa-4x"></i>
          </div>
          <div class="logo-tools" data-aos="fade-up" data-aos-delay="200">
            <i class="fab fa-css3 fa-4x"></i>
          </div>
          <div class="logo-tools" data-aos="fade-up" data-aos-delay="300">
            <i class="fab fa-js fa-4x"></i>
          </div>
          <div class="logo-tools" data-aos="fade-up" data-aos-delay="400">
            <i class="fab fa-vuejs fa-4x"></i>
          </div>
          <div class="logo-tools" data-aos="fade-up" data-aos-delay="500">
            <i class="fab fa-laravel fa-4x"></i>
          </div>
          <div class="logo-tools" data-aos="fade-up" data-aos-delay="600">
            <i class="fab fa-bootstrap fa-4x"></i>
          </div>
          <div class="logo-tools" data-aos="fade-up" data-aos-delay="700">
            <i class="fab fa-react fa-4x"></i>
          </div>
        </carousel>
      </div>
    </section>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  name: "Tools",
  components: { carousel },
};
</script>
<style scoped>
.daftar-tools {
  padding-top: 30px;
  padding-bottom: 80px;
  background-color: #1e639d;
  position: relative;
  color: #fff;
}
.logo-tools {
  padding: 20px 0px;
}
</style>
