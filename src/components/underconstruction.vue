<template>
  <div class="underconstruction">
    <div class="logoContainer">
      <img alt="Codale" src="/assets/img/logo.svg" class="logo" loading="lazy" />
      <h3>kanglerian.com</h3>
      <p>I'm sorry this page <b>underconstruction</b></p>
    </div>
    <div>
      <audio controls loop>
        <source src="/assets/audio/digimon.mp3" type="audio/ogg" />
        <source src="/assets/audio/digimon.mp3" type="audio/mpeg" />
      </audio>
    </div>
  </div>
</template>

<script>
export default {
  name: "Underconstruction",
};
</script>

<style scoped>
.underconstruction {
  padding-top: 110px;
  padding-bottom: 100px;
  background-color: #fdfdfd;
  color: #303030 !important;
}
.logoContainer {
  justify-content: center;
  justify-items: center;
}
.logo {
  text-align: center;
  width: 200px;
  height: 200px;
}
.btn {
  background-color: #3ca5ff;
  color: white;
  padding: 10px 20px;
}
.btn:hover {
  background-color: #2097ff;
}
</style>
