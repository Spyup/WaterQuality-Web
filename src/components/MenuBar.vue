<template>
    <div class="bg-purple-600 shadow h-screen w-64 min-w-min rounded-tr-xl rounded-br-xl" >
        <ul class="relative">
            <li class="relative">
                <a href="#" class="flex items-center py-4 px-6 h-12 overflow-hidden text-white text-ellipsis font-bold whitespace-nowrap rounded hover:text-blue-400 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true">首頁</a>
            </li>
            <li class="relative" id="sidenavEx1">
                <a class="flex items-center py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-blue-400 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer" data-mdb-ripple="true" data-mdb-ripple-color="dark" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx1" aria-expanded="true" aria-controls="collapseSidenavEx1">
                    <span class="font-bold ">地點</span>
                    <svg aria-hidden="true" focusable="false" data-prefix="false" class="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                    </svg>
                </a>
                <ul class="relative accordion-collapse collapse" id="collapseSidenavEx1" aria-labelledby="sidenavEx1" data-bs-parent="#sidenavExample">
                    <li class="relative">
                        <a href="#!" class="flex items-center text-sm py-4 pl-12 pr-6 h-6 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">大智慧科技大樓</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import "tailwindcss/tailwind.css"
import 'tw-elements';

export default {
  name: 'MenuBar',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
