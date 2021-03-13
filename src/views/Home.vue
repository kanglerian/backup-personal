<template>
  <div class="home">
    <hero-banner/>
    <features/>
    <section class="best">
        <div class="container">
            <div class="row justify-content-center mb-4">
                <div class="col-xl-12">
                    <h2><b>You’re Probably<br>Gonna Love These</b></h2>
                </div>
                <div class="col-xl-12">
                    <a href="#" style="float:right;font-size: 13px;text-decoration:underline;color: black;" class="view-all">VIEW ALL RECOMMENDATION</a>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="owl-carousel">
                        <div class="item">
                            <p class="badge">Mansion</p>
                            <img src="/assets/product/product-1.png" alt="" class="mb-3 img-fluid">
                            <div class="row justify-content-around">
                                <div class="col-auto" style="float:left;">
                                    <h5 class="item-title"><b>De Park</b></h5>
                                    <p class="item-address">Sullo, Komasia</p>
                                </div>
                                <div class="col-auto" style="float:right;">
                                    <p class="item-price">$592,000</p>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <p class="badge">Apartment</p>
                            <img src="/assets/product/product-2.png" alt="" class="mb-3">
                            <div class="row justify-content-around">
                                <div class="col-auto" style="float:left;">
                                    <h5 class="item-title"><b>Yellow Glow</b></h5>
                                    <p class="item-address">Palo, Inkopad</p>
                                </div>
                                <div class="col-auto" style="float:right;">
                                    <p class="item-price">$88,000</p>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <p class="badge">House</p>
                            <img src="/assets/product/product-3.png" alt="" class="mb-3">
                            <div class="row justify-content-around">
                                <div class="col-auto" style="float:left;">
                                    <h5 class="item-title"><b>Brown Gask</b></h5>
                                    <p class="item-address">Lahu, Lamma</p>
                                </div>
                                <div class="col-auto" style="float:right;">
                                    <p class="item-price">$190,300</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Features from '../components/Features.vue';
import HeroBanner from '../components/HeroBanner.vue';

export default {
  name: 'Home',
  components: {
    HeroBanner,
    Features
  }
}
</script>
