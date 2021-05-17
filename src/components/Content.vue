<template>
  <div class="content" style="overflow:hidden;">
    <section>
      <div class="container">
        <div class="row justify-content-center mb-3" style="overflow:hidden;">
          <div class="col-12 col-md-8 mb-5 align-self-center" data-aos="fade-right">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/HA6H8gSoq00"
              title="YouTube video player"
              frameborder="0"
              class="rounded"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="col-12 col-md-4 text-left align-self-center" data-aos="fade-left">
            <router-link to="/kelas" class="btn btn-info btn-sm"><i class="fas fa-long-arrow-alt-left"></i> Kembali ke Home</router-link>
            <hr class="my-4" />
            <p class="mb-4">Let's begin</p>
            <div class="list-group">
              <a href="#" class="list-group-item list-group-item-action active">Perkenalan</a>
              <a href="#" class="list-group-item list-group-item-action">Composition</a>
              <a href="#" class="list-group-item list-group-item-action">Transform</a>
              <a href="#" class="list-group-item list-group-item-action">Shape Properties</a>
              <a href="#" class="list-group-item list-group-item-action">Color</a>
              <a href="#" class="list-group-item list-group-item-action">Import Assets</a>
              <a href="#" class="list-group-item list-group-item-action">Latihan 1</a>
              <a href="#" class="list-group-item list-group-item-action disabled">not available</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Content",
};
</script>

<style scoped>
.content {
  padding: 50px 0px;
  background-color: #fdfdfd;
  color: #303030 !important;
}
.active {
  background-color: #1e639d;
  border: 0px;
}
.disabled {
  background-color: #cacaca;
}
.btn-content {
  padding: 5px 100px;
}
</style>
