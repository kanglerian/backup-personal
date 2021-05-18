<template>
  <div class="content" style="overflow:hidden;">
    <section>
      <div class="container">
        <div class="row justify-content-center mb-1 " style="overflow:hidden;">
          <div class="col-12 col-md-8 mb-5" data-aos="fade-right">
            <iframe width="560" height="315" v-bind:src="'https://www.youtube.com/embed/' + video" frameborder="0" allowfullscreen></iframe>
            <div class="row justify-content-center">
              <div class="col-auto align-self-center" data-aos="fade-up" data-aos-delay="100">
                <router-link to="/kelas" class="btn btn-secondary my-3"><i class="fas fa-long-arrow-alt-left"></i> Kembali</router-link>
              </div>
              <div class="col-auto align-self-center" data-aos="fade-up" data-aos-delay="200">
                <button class="btn btn-info" type="button" data-toggle="collapse" data-target="#collapseClass"><i class="fas fa-caret-square-down"></i> Lihat urutan kelas</button>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 text-left collapse show" id="collapseClass" data-aos="fade-left" style="overflow:hidden;">
            <p>
              <b>Mulai belajar! 👨‍💻</b>
            </p>
            <hr class="my-2" />
            <div class="list-group" v-for="detail in detailKelas" v-bind:key="detail.id">
              <a type="button" v-on:click="gantiVideo(detail.video)" class="list-group-item list-group-item-action my-1" v-bind:class="{ disabled: detail.isDisabled, active: detail.isActive }"
                >{{ detail.judul }} <span class="badge badge-info">{{ detail.durasi }}</span></a
              >
            </div>
          </div>
        </div>
        <hr class="mb-4" />
        <div class="row">
          <div class="col-xl-12">
            <h2>Forum Diskusi</h2>
            <p>Silahkan bisa komentari video ini, memberi masukan atau bertanya</p>
          </div>
        </div>
        <div class="row justify-content-center text-left my-3" v-for="post in komentar" v-bind:key="post.id" style="overflow:hidden;">
          <div class="col-12 col-xl-8 align-self-start">
            <div class="media">
              <img class="mr-3" src="/assets/img/guest.png" height="60px" />
              <div class="media-body">
                <h6 class="mt-0 mb-2">
                  <b>{{ post.nama }}</b>
                </h6>
                <p class="bg-comment">{{ post.pesan }}</p>
                <small class="d-flex text-muted time-comment">{{ post.waktu }}</small>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center text-left mt-5">
          <div class="col-12 col-xl-8 align-self-start">
            <div class="media">
              <div class="media-body">
                <form>
                  <div class="form-row">
                    <div class="form-group col-12 col-xl-5">
                      <input class="form-control bg-comment" placeholder="Tulis nama.." required />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-12">
                      <textarea class="form-control bg-comment" placeholder="Tulis komentar.." required></textarea>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group">
                      <button type="submit" class="btn btn-info btn-sm my-2 mx-1">Komentar</button>
                      <button type="reset" class="btn btn-danger btn-sm my-2 mx-1">Batal</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="row fixed-bottom">
          <div class="col-12 copyright">
            <p>
              © 2020 - 2021 <a href="http://www.kanglerian.com/" class="text-dark"><b>Codale Center</b></a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Content",
  data: function() {
    return {
      detailKelas: [
        {
          id: 1,
          idPlaylist: 3,
          judul: "Perkenalan",
          video: "HA6H8gSoq00",
          durasi: "03:07",
          isDisabled: false,
        },
        {
          id: 2,
          idPlaylist: 3,
          judul: "Composition",
          video: "mZTqYqeRhJU",
          durasi: "12:17",
          isDisabled: false,
        },
        {
          id: 3,
          idPlaylist: 3,
          judul: "Transform",
          video: "rxYEnhA6xTc",
          durasi: "09:29",
          isDisabled: false,
        },
        {
          id: 4,
          idPlaylist: 3,
          judul: "Shape dan Properties",
          video: "NDtrefFtKfw",
          durasi: "14:06",
          isDisabled: false,
        },
        {
          id: 5,
          idPlaylist: 3,
          judul: "Color Gradient",
          video: "L-BAEP2mgaM",
          durasi: "03:53",
          isDisabled: false,
        },
        {
          id: 6,
          idPlaylist: 3,
          judul: "Import Assets",
          video: "9uhSZYSaZBQ",
          durasi: "08:27",
          isDisabled: false,
        },
        {
          id: 7,
          idPlaylist: 3,
          judul: "Latihan 1",
          video: "v51GZxidz2w",
          durasi: "15:40",
          isDisabled: false,
        },
      ],
      video: "HA6H8gSoq00",
      komentar: [
        {
          id: 1,
          nama: "Uzumaki Naruto, M.Kom",
          pesan: "Hayoo!! Kagebunshin no Jutsu, rasengaann...",
          waktu: "Saturday, 04.25 A.M",
        },
        {
          id: 2,
          nama: "Uchiha Sasuke, M.Pd",
          pesan: "Kyaaaa, amaterasu! Chidori hyaaa.... cuan cuan cuan",
          waktu: "Friday, 01.25 P.M",
        },
      ],
    };
  },
  methods: {
    gantiVideo: function(video) {
      this.video = video;
    },
  },
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
.bg-comment {
  padding: 10px 15px;
  background-color: #f3f3f3;
  border-radius: 0.5rem;
}
.time-comment {
  margin-top: -10px;
}
.copyright {
  margin-top: 10px;
  background-color: #fcfcfc;
  padding-top: 10px;
  border-radius: 10px;
  text-align: center;
  width: 100%;
}
iframe {
  width: 100%;
  height: 250px;
}
@media (min-width: 1200px) {
  iframe {
    width: 100%;
    height: 410px;
  }
}
</style>
