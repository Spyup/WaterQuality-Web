<template>
  <div class="float-right mr-2 mt-2">
    <select class=" form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  <div class="grid grid-col-2 grid-flow-row gap-y-5 w-full h-5/6">
    <iframe src="http://172.24.8.21:3000/d-solo/2ReGYUC7k/tds-dashboard?orgId=1&kiosk=tv&theme=light&from=1655350563807&to=1655372163807&panelId=1" frameborder="0" class="w-full h-full col-end-1"></iframe>
    <iframe src="http://172.24.8.21:3000/d-solo/2ReGYUC7k/tds-dashboard?orgId=1&kiosk=tv&from=1655350841052&to=1655372441052&theme=light&panelId=3" frameborder="0" class="w-5/6 h-full col-start-1"></iframe>
    <iframe src="http://172.24.8.21:3000/d-solo/2ReGYUC7k/tds-dashboard?orgId=1&kiosk=tv&from=1655350884854&to=1655372484854&theme=light&panelId=2" frameborder="0" class="w-full h-full col-span-2"></iframe>
  </div>
</template>

<script>
import "tailwindcss/tailwind.css";

export default {
  name: 'ShowPhoto',
  props: {
  },
}
</script>

<style scoped>
</style>