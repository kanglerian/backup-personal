<template>
  <div class="home">
    <Navbar/>
    <Banner/>
    <Title/>
    <!-- <Biodata/> -->
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Banner from '../components/Banner.vue';
import Title from '../components/Title.vue';
// import Biodata from '../components/Biodata.vue'
import Footer from '../components/Footer.vue';
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    Navbar,
    Banner,
    Title,
    // Biodata,
    Footer

    
  },
};
</script>