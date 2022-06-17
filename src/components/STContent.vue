<template>
    <div v-if="Choose == 1" class="grid grid-col-2 grid-flow-row gap-y-3 w-full controll-height">
        <iframe src="http://172.24.8.21:3000/d-solo/2ReGYUC7k/tds-dashboard?orgId=1&kiosk=tv&theme=light&from=1655441123210&to=1655462723210&panelId=1" frameborder="0" class="w-full h-4/6 col-end-1"></iframe>
        <iframe src="http://172.24.8.21:3000/d-solo/2ReGYUC7k/tds-dashboard?orgId=1&kiosk=tv&theme=light&from=1655441144882&to=1655462744882&panelId=3" frameborder="0" class="w-5/6 h-4/6 col-start-1"></iframe>
        <iframe src="http://172.24.8.21:3000/d-solo/2ReGYUC7k/tds-dashboard?orgId=1&kiosk=tv&theme=light&from=1655461623592&to=1655463423593&panelId=2" frameborder="0" class="w-full h-5/6 col-span-2"></iframe>
    </div>
    <div v-else-if="Choose == 2" class="grid grid-col-2 grid-flow-row gap-y-5 w-full controll-height">
        <iframe src="http://172.24.8.21:3000/d-solo/2ReGYUC7k/tds-dashboard?orgId=1&kiosk=tv&theme=light&from=1655441682925&to=1655463282925&panelId=4" frameborder="0" class="w-full h-full col-end-1"></iframe>
        <iframe src="http://172.24.8.21:3000/d-solo/2ReGYUC7k/tds-dashboard?orgId=1&kiosk=tv&theme=light&from=1655441699650&to=1655463299651&panelId=6" frameborder="0" class="w-5/6 h-full col-start-1"></iframe>
        <iframe src="http://172.24.8.21:3000/d-solo/2ReGYUC7k/tds-dashboard?orgId=1&kiosk=tv&theme=light&from=1655461590018&to=1655463390018&panelId=5" frameborder="0" class="w-full h-full col-span-2"></iframe>
    </div>
</template>

<script>
export default {
  name: 'STContent',
  props: {
      Choose: Number
  },
  components: {
    
  }
}
</script>

<style scoped>
.controll-height {
    height: 90vh;
}
</style>