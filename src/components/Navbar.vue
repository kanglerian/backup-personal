<template>
  <div class="Navbar">
    <!-- Navbar -->
    <nav class=" navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <router-link to="/" class="navbar-brand">
                <img src="/assets/img/codale.svg" width="50">
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Beranda</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/kelas" class="nav-link">Kelas</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/aplikasi" class="nav-link">Aplikasi</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/blog" class="nav-link">Blog</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/portofolio" class="nav-link">Portofolio</router-link>
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
  name: 'Navbar'
}
</script>

<style>

a.router-link-exact-active {
  color: #42b983;
  font-weight: bold;
}

.navbar-nav{
    text-align: center;
}
.active {
    font-weight: 700;
}
.nav-link {
    margin-left: 20px;
    color: #133654!important;
}

</style>
