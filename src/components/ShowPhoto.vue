<template>
  <div class="float-right mr-2 mt-2">
    <ContentOption/>
  </div>
  <div class="grid grid-col-2 grid-flow-row gap-y-5 w-full h-5/6">
    <iframe src="http://172.24.8.21:3000/d-solo/2ReGYUC7k/tds-dashboard?orgId=1&kiosk=tv&theme=light&from=1655350563807&to=1655372163807&panelId=1" frameborder="0" class="w-full h-full col-end-1"></iframe>
    <iframe src="http://172.24.8.21:3000/d-solo/2ReGYUC7k/tds-dashboard?orgId=1&kiosk=tv&theme=light&from=1655350841052&to=1655372441052&panelId=3" frameborder="0" class="w-5/6 h-full col-start-1"></iframe>
    <iframe src="http://172.24.8.21:3000/d-solo/2ReGYUC7k/tds-dashboard?orgId=1&kiosk=tv&theme=light&from=1655350884854&to=1655372484854&panelId=2" frameborder="0" class="w-full h-full col-span-2"></iframe>
  </div>
</template>

<script>
import "tailwindcss/tailwind.css";
import ContentOption from "./ContentOption.vue"

export default {
  name: 'ShowPhoto',
  props: {
  },
  components: {
    ContentOption
  }
}
</script>

<style scoped>
</style>