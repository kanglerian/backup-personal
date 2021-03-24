<template>
  <div class="kontak">
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
  name: 'Kontak',
  components: {
    Navbar,
    Underconstruction,
    Footer
  }
}
</script>
