<template>
  <div class="footer" style="overflow:hidden;">
    <div class="container">
      <div class="row">
        <div class="col-6 col-xl-4">
          <ul class="footer-features">
            <li><router-link to="/" class="nav-link" data-aos="fade-right" data-aos-delay="100">Beranda</router-link></li>
            <li><router-link to="/kelas" class="nav-link" data-aos="fade-right" data-aos-delay="200">Kelas</router-link></li>
            <li><router-link to="/aplikasi" class="nav-link" data-aos="fade-right" data-aos-delay="300">Apps</router-link></li>
            <li><router-link to="/blog" class="nav-link" data-aos="fade-right" data-aos-delay="400">Blog</router-link></li>
          </ul>
        </div>
        <div class="col-6 col-xl-4">
          <ul class="footer-business">
            <li><router-link to="/order" class="nav-link" data-aos="fade-right" data-aos-delay="100">Jasa Pembuatan Website</router-link></li>
            <li><router-link to="/portofolio" class="nav-link" data-aos="fade-right" data-aos-delay="200">Portofolio</router-link></li>
            <li><router-link to="/kontak" class="nav-link" data-aos="fade-right" data-aos-delay="300">Kontak</router-link></li>
          </ul>
        </div>
        <div class="col-12 col-xl-4">
          <ul class="footer-media">
            <li class="mb-2">
              <a href="#" data-toggle="modal" data-target="#notAvailable"><img src="/assets/img/logo-google-play.png" data-aos="fade-left" data-aos-delay="100" loading="lazy"/></a>
            </li>
            <li class="mb-2">
              <a href="http://behance.net/kanglerian" target="_blank" data-aos="fade-up" data-aos-delay="200"><i class="fab fa-behance"></i></a>
              <a href="http://dribbble.com/kanglerian" target="_blank" data-aos="fade-up" data-aos-delay="300"><i class="fab fa-dribbble"></i></a>
              <a href="http://youtube.com/c/codalecenter" target="_blank" data-aos="fade-up" data-aos-delay="400"><i class="fab fa-youtube"></i></a>
              <a href="http://instagram.com/kanglerian" target="_blank" data-aos="fade-up" data-aos-delay="500"><i class="fab fa-instagram"></i></a>
            </li>
            <li>
              <p class="footer-address" data-aos="fade-left" data-aos-delay="100">Kota Tasikmalaya, 46151<br />Jawa Barat, Indonesia</p>
            </li>
          </ul>
        </div>
        <Copyright />
      </div>
    </div>
  </div>
</template>

<script>
import Copyright from "./Copyright.vue";
export default {
  components: { Copyright },
  name: "Footer",
};
</script>

<style scoped>
a.router-link-exact-active {
  font-weight: bold;
}
.footer {
  background-color: #fff;
  padding: 0px 10px;
  padding-top: 30px;
  padding-bottom: 10px;
  text-align: center;
  z-index: 99;
  position: relative;
  border-radius: 40px 40px 0px 0px;
  margin-top: -50px;
}
.active {
  font-weight: 700;
}
ul li {
  list-style: none;
  text-align: left;
  margin-left: -35px;
}
.footer-business li a,
.footer-features li a,
.footer-media li a,
.footer-address {
  color: #303030 !important;
}
.footer-address {
  font-size: 17px;
}
.footer-media {
  margin-left: 35px;
}
.footer-media li a {
  font-size: 25px;
  margin-right: 5px;
}
</style>
