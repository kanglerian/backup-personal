<template>
  <div class="order">
    <Navbar/>
    <!-- <FormOrder/> -->
    <Underconstruction/>
    <Footer/>
  </div>
</template>

<script>
import Underconstruction from '../components/underconstruction.vue'
import Navbar from '../components/Navbar.vue'
// import FormOrder from '../components/FormOrder.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Order',
  components: {
    Navbar,
    // FormOrder,
    Underconstruction,
    Footer
  }
}
</script>
