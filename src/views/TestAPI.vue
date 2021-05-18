<template>
  <div class="testapi">
    <Navbar />
    <section class="daftar-portofolio" style="overflow:hidden;">
      <div class="container">
        <div class="row justify-content-center mb-4">
          <div class="col-xl-5 col-12">
            <h2 class="katalog-title" data-aos="fade-up">
              Produk Namira Hijab
            </h2>
            <hr data-aos="fade-up" data-aos-delay="100" />
            <p data-aos="fade-left" data-aos-delay="200">Ini adalah list dari produk Namira Hijab :)</p>
          </div>
        </div>
        <div class="row justify-content-center text-center" v-if="products.length > 0">
          <div v-for="itemProduct in products" v-bind:key="itemProduct.id" class="col-xl-3 col-12">
            <div class="menu-card" data-aos="fade-up">
              <img v-bind:src="itemProduct.galleries[0].photo" class="img-fluid text-center" loading="lazy" data-aos="flip-left" data-aos-delay="100" />
              <h5 class="menu-title">{{ itemProduct.name }}</h5>
              <p class="menu-desc">{{ itemProduct.type }}</p>
              <div class="row justify-content-between">
                <div class="col-auto align-self-center">
                  <router-link class="btn btn-open" target="_blank">Lihat</router-link>
                </div>
                <div class="col-auto align-self-center">
                  <p class="badge badge-info">${{ itemProduct.price }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center" v-else>
          <p>Sakedap, nuju loading..</p>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import axios from "axios";

export default {
  name: "Testapi",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    axios
      .get("http://shayna-backend.belajarkoding.com/api/products")
      .then((res) => (this.products = res.data.data.data))
      .catch((err) => console.log(err));
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
