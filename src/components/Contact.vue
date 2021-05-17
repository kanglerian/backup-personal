<template>
  <div class="contact" style="overflow:hidden;">
    <section>
      <div class="container">
        <div class="row justify-content-center mb-3" style="overflow:hidden;">
          <div class="col-12 col-md-8">
            <h2 data-aos="fade-right"><b>Kirim pesan</b></h2>
            <hr data-aos="fade-left" data-aos-delay="200" />
            <p>Mau bertanya, mau request tutorial, atau mau bisnis? boleh-boleh, silahkan drop aja disini 👋</p>
          </div>
        </div>
        <div class="row justify-content-center text-left" style="overflow:hidden;">
          <div class="col-12 col-lg-8">
            <form action="mailto:kanglerian@gmail.com" method="post" enctype="text/plain">
              <div class="form-group" data-aos="fade-right" data-aos-delay="100">
                <label>Email</label>
                <input type="email" class="form-control" name="email" placeholder="nama@domain.com" required />
              </div>
              <div class="form-group" data-aos="fade-left" data-aos-delay="200">
                <label>Nama lengkap</label>
                <input type="text" class="form-control" name="name" placeholder="isi nama lengkap..." required />
              </div>
              <div class="form-group" data-aos="fade-left" data-aos-delay="400">
                <label>Pesan</label>
                <textarea class="form-control" rows="6" name="message" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary" data-aos="fade-up" data-aos-delay="100">Kirim</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
.contact {
  padding-top: 110px;
  padding-bottom: 100px;
  background-color: #fdfdfd;
  color: #303030 !important;
}
</style>
