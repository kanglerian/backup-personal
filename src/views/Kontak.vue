<template>
  <div class="kontak">
    <Navbar />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Contact from "../components/Contact.vue";

export default {
  name: "Kontak",
  components: {
    Navbar,
    Contact,
    Footer,
  },
};
</script>
