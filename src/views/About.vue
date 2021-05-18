<template>
  <div class="about">
    <Navbar />
    <section class="tentang" style="overflow:hidden;">
      <div class="container">
        <div class="row justify-content-center text-left mb-4">
          <div class="col-xl-3 col-8">
            <div class="youtube-card mb-5">
              <img v-bind:src="youtube.snippet.thumbnails.default.url" alt="" class="img-fluid rounded" />
              <h6>
                <a v-bind:href="'https://www.youtube.com/c/' + youtube.snippet.customUrl" target="_blank" class="text-dark"
                  ><b>{{ youtube.snippet.title }}</b></a
                >
              </h6>
              <div class="g-ytsubscribe" data-channelid="UC0wRN3aUL9V7AS_TrZxNquw" data-layout="default" data-count="hidden"></div>
            </div>
          </div>
          <div class="col-xl-8 col-12">
            <h2 data-aos="fade-up">Selamat datang di {{ youtube.snippet.title }}</h2>
            <hr data-aos="fade-up" data-aos-delay="100" />
            <p data-aos="fade-left" data-aos-delay="200">{{ youtube.snippet.description }}</p>
          </div>
        </div>
        <div class="row justify-content-center mb-4">
          <div class="col-xl-6 mb-4">
            <iframe width="100%" height="315" v-bind:src="'https://www.youtube.com/embed/' + latestVideo.id.videoId" frameborder="0" allowfullscreen class="rounded"></iframe>
          </div>
          <div class="col-xl-6 text-left">
            <h5 class="badge badge-info mb-3">Video Terbaru di Codale Center</h5>
            <h5>
              <b>{{ latestVideo.snippet.title }}</b>
            </h5>
            <hr class="my-3" />
            <p>{{ latestVideo.snippet.description }}</p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import axios from "axios";
export default {
  name: "About",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      youtube: [],
      latestVideo: [],
    };
  },
  mounted() {
    axios
      .get("https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=UC0wRN3aUL9V7AS_TrZxNquw&key=AIzaSyBpKpDfCcW0E4mrpXiACJ0xsUJbanCMHJQ")
      .then((res) => (this.youtube = res.data.items[0]))
      .catch((err) => console.log(err));
    axios
      .get("https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC0wRN3aUL9V7AS_TrZxNquw&key=AIzaSyBpKpDfCcW0E4mrpXiACJ0xsUJbanCMHJQ&maxResults=1&order=date")
      .then((res) => (this.latestVideo = res.data.items[0]))
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.tentang {
  padding-top: 110px;
  padding-bottom: 80px;
  background-color: #fdfdfd;
  color: #303030 !important;
}
.youtube-card {
  text-align: center;
  padding: 5px 10px;
  font-weight: 300;
  background-color: #fcfcfc;
  font-size: 14px;
  border-radius: 5px;
  box-shadow: 0px 60px 80px rgba(209, 209, 209, 0.25);
}
</style>
