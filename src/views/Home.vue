<template>
  <div class="home">
    <Navbar/>
    <Banner/>
    <Title/>
    <Hobbies/>
    <Tools/>
    <!-- <Biodata/> -->
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Banner from '../components/Banner.vue';
import Title from '../components/Title.vue';
import Hobbies from '../components/Hobbies.vue';
import Tools from '../components/Tools.vue';
import Footer from '../components/Footer.vue';
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    Navbar,
    Banner,
    Title,
    Hobbies,
    Tools,
    Footer,

    
  },
};
</script>