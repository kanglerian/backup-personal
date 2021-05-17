<template>
  <div class="Navbar">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-ale fixed-top" style="overflow:hidden;">
      <div class="container">
        <router-link to="/" class="navbar-brand">
          <img src="/assets/img/icon-light.svg" width="50" data-aos="fade-down" loading="lazy" />
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link" data-aos="fade-down" data-aos-delay="100">Beranda</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/kelas" class="nav-link" data-aos="fade-down" data-aos-delay="200">Kelas</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/aplikasi" class="nav-link" data-aos="fade-down" data-aos-delay="300">Aplikasi</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/blog" class="nav-link" data-aos="fade-down" data-aos-delay="400">Blog</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/portofolio" class="nav-link" data-aos="fade-down" data-aos-delay="500">Portofolio</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link" data-aos="fade-down" data-aos-delay="500">Masuk</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link btn btn-signup" data-aos="fade-down" data-aos-delay="500">Daftar</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- End Navbar -->
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
a.router-link-exact-active {
  font-weight: 700;
}

.navbar-nav {
  text-align: center;
}
.active {
  font-weight: 700;
}
.nav-link {
  font-size: 14px;
  text-align: center;
  font-weight: 200;
  margin: 0px 10px;
  color: white !important;
}
.bg-ale {
  background-color: #1e639d;
}
</style>
