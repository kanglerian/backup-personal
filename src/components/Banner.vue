<template>
  <div class="banner" style="overflow:hidden;">
    <section>
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-xl-5 col-12 align-self-center">
            <div class="profile-container">
              <img v-bind:src="'/assets/img/' + photo + '.webp'" class="profile-picture" loading="lazy" />
              <h5 class="profile-name">{{ firstName }} {{ lastName }}</h5>
              <p class="profile-title">{{ title }}</p>
              <p class="profile-bio">“{{ bio }}”</p>
              <p class="profile-badge">
                <span class="badge" v-bind:class="{ 'badge-success': isAvailable, 'badge-danger': hasError }">{{ isAvailable ? "Available" : "Not Available" }}</span>
              </p>
              <a href="https://wa.me/6281286501015" target="_blank" class="btn btn-primary btn-sm profile-chat">chat me!</a>
            </div>
          </div>
          <div class="col-xl-6 col-12 align-self-center">
            <div class="portofolio-container">
              <div class="row justify-content-center">
                <div class="col-auto my-2">
                  <a href="https://www.behance.net/kanglerian" target="_blank" class="icon"><i class="fab fa-behance-square fa-3x"></i></a>
                </div>
                <div class="col-auto my-2">
                  <a href="http://youtube.com/c/codalecenter" target="_blank" class="icon"><i class="fab fa-youtube fa-3x"></i></a>
                </div>
                <div class="col-auto my-2">
                  <a href="http://instagram.com/kanglerian" target="_blank" class="icon"><i class="fab fa-instagram fa-3x"></i></a>
                </div>
                <div class="col-auto my-2">
                  <a href="https://www.linkedin.com/in/lerian-febriana-87ab831b4/" target="_blank" class="icon"><i class="fab fa-linkedin fa-3x"></i></a>
                </div>
                <div class="col-auto my-2">
                  <a href="https://github.com/kanglerian" target="_blank" class="icon"><i class="fab fa-github fa-3x"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="margin-top:-10px;">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,160L80,154.7C160,149,320,139,480,160C640,181,800,235,960,229.3C1120,224,1280,160,1360,128L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  </div>
</template>

<script>
import { gsap } from "gsap";
export default {
  name: "Banner",
  data: function() {
    return {
      firstName: "Lerian",
      lastName: "Febriana",
      title: "Front End Developer",
      bio: "Kami membuat website lebih indah daripada yang dibayangkan 👋",
      isAvailable: true,
      hasError: false,
      photo: "photo-2",
    };
  },
  mounted: function() {
    gsap.from(".profile-container", { duration: 3, delay: 0.5, y: -550, rotate: -20, ease: "elastic" });
    gsap.from(".portofolio-container", { duration: 3, delay: 0.7, y: -700, rotate: -20, ease: "elastic" });
    gsap.from(".profile-picture", { duration: 2, delay: 1, y: -500, rotate: -20, ease: "bounce" });
    gsap.from(".profile-name", { duration: 3, x: -500, rotate: -20, ease: "elastic" });
    gsap.from(".profile-title", { duration: 3, delay: 0.5, x: 500, rotate: -20, ease: "elastic" });
    gsap.from(".profile-bio", { duration: 3, delay: 0.5, x: -500, rotate: -20, ease: "elastic" });
    gsap.from(".profile-badge", { duration: 2, delay: 1, scaleX: 0, rotate: 20, ease: "elastic" });
    gsap.from(".profile-chat", { duration: 2, delay: 1.5, scaleX: 0, rotate: -20, ease: "elastic" });
  },
};
</script>

<style scoped>
.profile-container {
  background-color: #ffffff;
  text-align: center;
  padding: 30px 50px;
  border-radius: 25px;
  margin-top: 70px;
  box-shadow: 0px 60px 80px rgba(60, 165, 255, 0.25);
}
.portofolio-container {
  background-color: #ffffff;
  text-align: center;
  padding: 30px 10px;
  border-radius: 25px;
  margin-top: 15px;
  margin-bottom: -50px;
}
.profile-picture {
  margin-bottom: 8px;
  width: 50%;
}
.profile-name {
  font-weight: 700;
  color: #4a4a4a;
  font-size: 25px;
}
.profile-title {
  font-weight: 400;
  font-size: 17px;
  color: #9b9b9b;
}
.profile-bio {
  color: #4a4a4a;
  font-size: 17px;
}
.icon {
  margin: 0px 10px;
  color: #303030;
}
.active {
  color: green;
}
@media (min-width: 1200px) {
  .profile-container {
    box-shadow: 0px 60px 80px rgba(0, 111, 200, 0.05);
  }
  .portofolio-container {
    box-shadow: 0px 60px 80px rgba(0, 111, 200, 0.05);
  }
}
</style>
