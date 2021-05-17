<template>
  <div class="title">
    <section>
      <div class="container">
        <div class="row justify-content-center" style="overflow:hidden;">
          <div v-for="myField in field" v-bind:key="myField.id" class="col-xl-4 col-12">
            <div class="title-card" v-bind:class="{ active: myField.isActive }" data-aos="fade-up">
              <div data-aos="fade-right" data-aos-delay="200">
                <i v-bind:class="myField.icon"></i>
              </div>
              <h5 data-aos="fade-left" data-aos-delay="300">{{ myField.nama }}.</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Title",
  data: function() {
    return {
      field: [
        {
          id: 1,
          nama: "UI/UX Designer",
          icon: "fas fa-layer-group fa-3x",
          isActive: false,
        },
        {
          id: 2,
          nama: "Front End Developer",
          icon: "fas fa-terminal fa-3x",
          isActive: true,
        },
        {
          id: 3,
          nama: "Social Media Designer",
          icon: "fas fa-object-group fa-3x",
          isActive: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
.title {
  padding: 50px 0px;
  background-color: #fff;
}
.title-card {
  padding: 60px 30px;
  text-align: left;
  border-radius: 20px;
  margin-bottom: 15px;
  background-color: #f7f7f7;
  color: #4a4a4a;
  transition: 300ms ease-in-out;
}
.title-card:hover {
  background-color: #1e5079;
  color: #fff;
  transition: 300ms ease-in-out;
}
.active {
  background-color: #1e639d;
  color: #fff;
}
.active:hover {
  background-color: #1e5079;
  color: #fff;
}
.title-card h5 {
  font-weight: 700;
  font-size: 20px;
  margin-top: 20px;
}
</style>
