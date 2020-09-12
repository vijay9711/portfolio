<template>
  <div class="nav-wrapper d-flex">
      <img src="../assets/Logo.svg" class="my-logo">
      <label :class="index===0? 'ml-5' : 'ml-3'" v-for="(item,index) in navItems" :key="index" >{{item.name}}</label>
  </div>
</template>

<script>
export default {
    data(){
        return{
            navItems:[
                {
                    name:"Home",
                    icon:""
                },
                {
                    name:"Project",
                    icon:""
                },
                {
                    name:"About",
                    icon:""
                },
                {
                    name:"Blog",
                    icon:""
                },
                {
                    name:"Contact",
                    icon:""
                }
            ]
        }
    }
}
</script>

<style scoped>
.nav-wrapper{
    background-color: transparent;
    height: 15vh;
    font-size:20px;
    align-items: center;
}
.my-logo{
    margin-left: 10%;
}
</style>