<template>
  <div class="barang">
    <Navbar />
    <section class="daftar-barang" style="overflow:hidden;">
      <div class="container">
        <div class="row justify-content-center text-center mb-4">
          <div class="col-xl-8">
            <h5 class="menu-title">
              {{ productDetails.name }} <span class="badge badge-info">{{ productDetails.type }}</span>
            </h5>
            <p v-html="productDetails.description"></p>
            <hr />
          </div>
        </div>
        <div class="row justify-content-center mb-4" style="overflow:hidden;">
          <div class="col-xl-8">
            <img v-bind:src="gambar_default" class="img-fluid" data-aos="fade-up" />
            <div class="row justify-content-center text-center">
              <div class="col-12" data-aos="fade-up" data-aos-delay="200">
                <div v-if="productDetails.galleries.length > 0">
                  <carousel :loop="true" :nav="false" :autoplay="true" :items="3">
                    <div class="image-hobbies rounded mx-2" v-for="ss in productDetails.galleries" :key="ss.id" @click="changeImage(ss.photo)" :class="ss.photo == gambar_default ? 'active' : ''">
                      <img :src="ss.photo" class="img-fluid" loading="lazy" />
                    </div>
                  </carousel>
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
import carousel from "vue-owl-carousel";
import axios from "axios";
export default {
  name: "Barang",
  components: {
    Navbar,
    Footer,
    carousel,
  },
  data() {
    return {
      gambar_default: "",
      idProduct: this.$route.params.id,
      productDetails: [],
    };
  },
  methods: {
    changeImage(urlImage) {
      this.gambar_default = urlImage;
    },
    setDataPicture(data) {
      this.productDetails = data;
      this.gambar_default = data.galleries[0].photo;
    },
  },

  mounted() {
    axios
      .get("http://shayna-backend.belajarkoding.com/api/products", {
        params: {
          id: this.$route.params.id,
        },
      })
      .then((res) => this.setDataPicture(res.data.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.daftar-barang {
  padding-top: 110px;
  padding-bottom: 80px;
  background-color: #fdfdfd;
  color: #303030 !important;
}

.barang-card {
  text-align: center;
  padding: 5px 10px;
  font-weight: 300;
  color: #fff;
  font-size: 14px;
  border-radius: 5px;
}
</style>
