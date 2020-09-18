<template>
  <div class="home-wrapper m-0" id="home" @mouseover="moveObject($event,'self-intro-pic')">
    <div class="home-content">
      <div class="row p-0 m-0 self-intro-wrapper">
        <div class="col-6 p-0 m-0">
          <img
            src="../assets/Intro.svg"
            data-aos="fade-right"
            data-aos-delay="100"
            class="selt-intro"
          />
        </div>
        <div class="col-6 p-0 m-0">
          <img
            src="../assets/IntroBg.svg"
            data-aos="zoom-in-up"
            data-aos-offset="500"
            data-aos-duration="300"
            class="self-intro-pic-bg"
          />
          <img
            data-aos="fade-left"
            data-aos-offset="500"
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
// import $ from "jquery";
export default {
  components: {},
  data(){
    return{
      windowWidth:window.innerWidth / 10,
      windowHeight: window.innerHeight / 10
    }
  },
  methods:{
    moveObject(e,className){
      const img = document.querySelector(`.${className}`);
      const mouseX = e.clientX / this.windowWidth;
      const mouseY = e.clientY / this.windowHeight;
      setTimeout(()=>{
      console.log(mouseX,mouseY)
        img.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
      },1000)
    }
  }
};
</script>

<style scoped>
.home-wrapper {
  height: 100vh;
}
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
  width: 70%;
  right: 5%;
  bottom: 15%;
  transition-duration: .5s;
}
.self-intro-pic-bg {
  width: 100%;
  align-items: flex-end;
}
</style>
