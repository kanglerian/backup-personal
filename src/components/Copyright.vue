<template>
  <div class="copyright">
    <div class="row justify-content-between">
      <div class="col-12 col-xl-12" style="overflow:hidden;">
        <p>
          © 2020 - 2021 <router-link to="/about" class="text-dark"><b>Codale Center</b></router-link> • All rights reserved<br />Created with <i class="fas fa-coffee"></i> from Kota Tasikmalaya
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.copyright {
  margin-top: 10px;
  background-color: #fcfcfc;
  padding-top: 10px;
  border-radius: 10px;
  text-align: center;
  width: 100%;
}
</style>
