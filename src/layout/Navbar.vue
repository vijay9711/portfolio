<template>
  <div>
    <!-- <a :href="`${item.name}`" :class="index===0? 'ml-5' : 'ml-3'" v-for="(item,index) in navItems" :key="index" >{{item.name}}</a> -->
    <!-- <b-navbar class="w-100" type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item  v-for="(item,index) in navItems" :key="index" @click="getCurrentPage(item.label)">{{item.name}}</b-nav-item>
      </b-navbar-nav>
    </b-navbar> -->
    <b-navbar toggleable="lg" fixed="top">
    <img src="../assets/Logo.svg" class="my-logo">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item v-for="(item,index) in navItems" class="ml-3 navigation-item" :class="item.label === selectedItem?'selected-item':'not-selected-item'" :key="index" @click="scroll(item.label)">{{item.name}}</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedItem:"home",
      navItems: [
        {
          name: "Home",
          label:"home",
          icon: "",
        },
        {
          name: "Project",
          label:"project",
          icon: "",
        },
        {
          name: "About",
          label:"about",
          icon: "",
        },
        {
          name: "Blog",
          label:"blog",
          icon: "",
        },
        {
          name: "Contact",
          label:"contact",
          icon: "",
        },
      ],
    };
  },
  methods: {
    // getCurrentPage(event) {
    //   console.log(event);
    //   this.$router.push({ path: `/${event}` });
    //   // var elmnt = document.getElementById(`#${event}`);
    //   // console.log(elmnt);
    //   // elmnt.scrollIntoView({
    //   //    behavior: 'smooth'
    //   // });
    // //   document.querySelector(`#${page}`).scrollIntoView({ behavior: "smooth" });
    // },
    scroll(item) {
      console.log(item);
      this.selectedItem = item;
      this.$emit("selectedItem", item);
    },
  },
};
</script>

<style scoped>
.nav-wrapper {
  background-color: transparent;
  height: 15vh;
  font-size: 20px;
  align-items: center;
}
.my-logo {
  margin-left: 10%; 
  margin-right: 3%;  
  width: 5%;
}
.selected-item{
  text-decoration: underline;
  transition: .2s;
}
.not-selected-item{
  text-decoration: none;
}
.navigation-item{
  font-size: 18px;
}
</style>
<style>
.nav-link{
  color: white !important;
}
</style>
