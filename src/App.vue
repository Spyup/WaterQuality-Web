<template>
  <div class="grid grid-cols-6">
      <div class="">
        <MenuBar/>
      </div>
      <div class="col-span-5">
        <ShowPhoto/>
      </div>
  </div>
</template>

<script>
import MenuBar from './components/MenuBar.vue'
import ShowPhoto from './components/ShowPhoto.vue'
import "./assets/tailwindcss.css"

export default {
  name: 'App',
  components: {
    MenuBar,
    ShowPhoto
  }
}
</script>

<style>
.sidenav {
  margin:0px;
}
</style>
