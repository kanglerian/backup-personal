<template>
  <div class="ruang-kelas">
    <Content />
    <Copyright />
  </div>
</template>

<script>
import Content from "../components/Content.vue";
import Copyright from "../components/Copyright.vue";

export default {
  name: "Ruang-kelas",
  components: {
    Content,
    Copyright,
  },
};
</script>
