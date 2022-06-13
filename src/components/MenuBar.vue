<template>
    <div class="bg-white shadow w-64 my-2">
        <ul class="sidenav">
            <li >
                <a href="#" class="block p-4 text-grey-100 font-bold hover:border-purple-700 hover:bg-gray-200 border-r-4">Home</a>
            </li>
            <li >
                <a href="#" class="block p-4 text-grey-100 font-bold border-grey-50 hover:border-purple-700 hover:bg-gray-200 border-r-4">About us</a>
            </li>
            <li >
                <a href="#" class="block p-4 text-grey-100 font-bold border-grey-50 hover:border-purple-700 hover:bg-gray-200 border-r-4">Services</a>
            </li>
            <li >
                <a href="#" class="block p-4 text-grey-100 font-bold border-grey-50 hover:border-purple-700 hover:bg-gray-200 border-r-4">Contact us</a>
            </li>
        </ul>
    </div>
</template>

<script>
import "tailwindcss/tailwind.css"

export default {
  name: 'MenuBar',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
