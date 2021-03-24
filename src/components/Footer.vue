<template>
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-6 col-xl-4">
                    <ul class="footer-features">
                        <li><router-link to="/" class="nav-link">Beranda</router-link></li>
                        <li><router-link to="/kelas" class="nav-link">Kelas</router-link></li>
                        <li><router-link to="/aplikasi" class="nav-link">Apps</router-link></li>
                        <li><router-link to="/blog" class="nav-link">Blog</router-link></li>
                    </ul>
                </div>
                <div class="col-6 col-xl-4">
                    <ul class="footer-business">
                        <li><router-link to="/order" class="nav-link">Jasa Pembuatan Website</router-link></li>
                        <li><router-link to="/portofolio" class="nav-link">Portofolio</router-link></li>
                        <li><router-link to="/kontak" class="nav-link">Kontak</router-link></li>
                    </ul>
                </div>
                <div class="col-12 col-xl-4">
                    <ul class="footer-media">
                        <li class="mb-2">
                            <img src="/assets/img/logo-google-play.png">
                        </li>
                        <li class="mb-2">
                            <a href="http://behance.net/kanglerian" target="_blank"><i class="fab fa-behance"></i></a>
                            <a href="http://dribbble.com/kanglerian" target="_blank"><i class="fab fa-dribbble"></i></a>
                            <a href="http://youtube.com/c/codalecenter" target="_blank"><i class="fab fa-youtube"></i></a>
                            <a href="http://instagram.com/kanglerian" target="_blank"><i class="fab fa-instagram"></i></a>
                        </li>
                        <li>
                            <p class="footer-address">Kota Tasikmalaya, 46151<br>Jawa Barat, Indonesia</p>
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-xl-12 copyright">
                    <p>© 2020 - 2021 Codale Center • All rights reserved • Love from Tasikmalaya</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Footer'
}
</script>

<style scoped>

.footer {
    background-color: #FFFFFF;
    padding: 0px 10px;
    padding-top:30px;
    padding-bottom:10px;
    text-align: center;
    z-index: 99;
    position: relative;
    border-radius: 40px 40px 0px 0px;
    margin-top: -50px;
}
ul li {
    list-style: none;
    text-align:left;
    margin-left:-35px;
}
.footer-address {
    color: #4A4A4A;
    font-size:17px;
}
.footer-media {
    margin-left:35px;
}
.footer-media li a {
    color: #4A4A4A;
    font-size: 25px;
    margin-right: 5px;
}
.copyright {
    margin-top:10px;
    background-color: #fcfcfc;
    padding-top:10px;
    border-radius: 10px;
}
</style>
