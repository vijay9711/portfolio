<template>
<div class="body-wrapper">
    <Loader :loader="loader" />
    <nav-bar class="nav-bar" @selectedItem="scrollToItem($event)"/>
  <div id="app">
    <!-- <router-view class="router-c"/> -->
    <Home id="home" class="common-page" />
    <Project id="project" class="common-page"/>
    <About id='about'  class="common-page"/>
    <Blog id='blog'  class="common-page"/>
    <Contact id='contact'  class="common-page"/>
  </div>

</div>
</template>

<script>
import NavBar from "./layout/Navbar.vue";
import Home from "./pages/Home.vue";
import Project from "./pages/Project.vue";
import Blog from "./pages/Blog.vue";
import About from "./pages/About.vue";
import Contact from "./pages/Contact.vue";
import Loader from "./widget/Loader.vue";

export default {
  name: "app",
  components: {
    "nav-bar":NavBar,
    Home,
    Project,
    Blog,
    About,
    Contact,
    Loader
  },
  methods:{
    scrollToItem(event) {
      console.log(event)
      var elmnt = document.getElementById(event);
      elmnt.scrollIntoView({
        top: 'offsetPosition',
        block: "end",
         behavior: 'smooth'
      });
    },
  }
};
</script>

<style scoped>
.body-wrapper{
    height: 100vh;
    position: absolute;
    width: 100%;
    background: linear-gradient(217deg, rgba(55,71,79,1) 100%, rgba(38,50,56,1) 100%);
    overflow: scroll;
    overflow-x: hidden;
    overflow: -moz-scrollbars-none !important;
    -ms-overflow-style: none !important;
}
.nav-bar{
  background-color: transparent;
  /* position: fixed; */
}
.router-c{
  margin-top: 4%;
}
.common-page{
  margin-top: 5%;
}
</style>
<style>
#app {
  /* font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
