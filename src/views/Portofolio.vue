<template>
  <div class="portofolio">
    <Navbar/>
    <Underconstruction/>
    <Footer/>
  </div>
</template>

<script>
import Underconstruction from '../components/underconstruction.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Portofolio',
  components: {
    Navbar,
    Underconstruction,
    Footer
  }
}
</script>
