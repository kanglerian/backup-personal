<template>
  <div class="daftar-hobbies">
    <section>
      <div class="container">
        <div class="row justify-content-between" style="overflow:hidden;">
          <div class="col-xl-6 col-12" data-aos="fade-right">
            <carousel :loop="true" :nav="false" :autoplay="true" :items="1">
              <div v-for="myHobby in hobbies" v-bind:key="myHobby.id" class="image-hobbies rounded">
                <img v-bind:src="'/assets/thumbs/' + myHobby.thumb" class="img-fluid rounded" loading="lazy" />
              </div>
            </carousel>
          </div>
          <div class="col-xl-6 col-12 text-left">
            <div>
              <h5 class="hobbies-title" data-aos="fade-left" data-aos-delay="100">My Hobbies</h5>
              <hr />
              <p class="hobbies-desc" data-aos="fade-up" data-aos-delay="200">
                Hello! This is my hobby, including playing games, sports such as taekwondo, swimming and cycling. Besides that, I like to learn new things, especially in the IT field and like gardening.
              </p>
              <hr />
              <div class="hobbies-game">
                <img src="/assets/img/point-blank.png" height="80px" alt="" data-aos="fade-left" data-aos-delay="300" loading="lazy" />
                <img src="/assets/img/township.png" height="80px" alt="" data-aos="fade-left" data-aos-delay="400" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#1e639d"
          fill-opacity="1"
          d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  name: "Hobbies",
  data: function() {
    return {
      hobbies: [
        {
          id: 1,
          thumb: "default.png",
        },
        {
          id: 2,
          thumb: "default.png",
        },
      ],
    };
  },
  components: { carousel },
};
</script>

<style scoped>
.daftar-hobbies {
  padding-top: 80px;
}
.hobbies-title {
  font-weight: 700;
  font-size: 30px;
  color: #4a4a4a;
}
.hobbies-desc {
  color: #4a4a4a;
}
.hobbies-game img {
  margin: 0px 20px;
}
</style>
