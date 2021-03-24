<template>
  <div class="blog">
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
  name: 'Blog',
  components: {
    Navbar,
    Underconstruction,
    Footer
  }
}
</script>
