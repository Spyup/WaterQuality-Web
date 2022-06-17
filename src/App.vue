<template>
  <div class="flex w-auto">
    <div class="">
      <MenuBar/>
    </div>
    <div class="w-full h-screen">
      <router-view/>
    </div>
  </div>
</template>

<script>
import "./assets/tailwindcss.css"
import MenuBar from "./components/MenuBar.vue";

export default {
  name: 'App',
  components: {
    MenuBar,
  },
}
</script>

<style>
.sidenav {
  margin:0px;
}
</style>
