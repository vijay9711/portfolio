<template>
  <div class="home-wrapper m-0" id="home">
    <div class="home-content">
      <div class="row p-0 m-0 self-intro-wrapper">
        <div class="col-lg-6 col-sm-11 col-md-6 p-0 m-0 self-intro-content">
          <img
            src="../assets/Intro.svg"
            data-aos="fade-right"
            data-aos-delay="100"
            class="selt-intro"
          />
        </div>
        <div class="col-lg-6 col-sm-12 col-md-6 p-0 m-0">
          <img
            src="../assets/IntroBg.svg"
            data-aos="zoom-in-up"
            data-aos-duration="300"
            class="self-intro-pic-bg"
          />
            <img
            data-speed="-3"
            data-depth="0.2"
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-delay="200"
            src="../assets/PC_pic.svg"
            class="self-intro-pic"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
document.addEventListener('mousemove',parallax);
function parallax(e){
      const img = document.querySelector(`.self-intro-pic`);
      const speed = img.getAttribute('data-speed');
      const mouseX = (window.innerWidth - e.pageX*speed)/100;
      const mouseY = (window.innerHeight - e.pageY*speed)/100;
      img.style.transform = `translateX(${mouseX}px) translateY(${mouseY}px)`;
}
export default {
  components: {
  },
  data(){
    return{
    }
  },
  methods:{
    // moveObject(e,className){
    //   // console.log(`translateX(${mouseX}%, ${mouseY}%)`)
    // }
  }
};
</script>
<style scoped>
.home-wrapper {
  height: 100vh;
}
/* .bg{
  background-image: url('../assets/home/bg.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  z-index: -1;
} */
.home-content {
  overflow: hidden;
}
.self-intro-wrapper {
  margin-top: 10%;
  height: 100vh;
}
.selt-intro {
  margin-top: 13%;
  width: 90%;
  margin-left: 11%;
}
.self-intro-pic {
  position: absolute;
  width: 60%;
  right: 5%;
  bottom: 6%;
  object-fit: cover;
}
.self-intro-pic-bg {
  position: absolute;
  right: 5%;
  bottom: .5%;
  overflow: hidden;
  width: 80%;
  align-items: flex-end;
}
</style>
