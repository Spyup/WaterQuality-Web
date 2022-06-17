<template>
  <div v-if=" this.$route.name == 'st' ">
    <div class="float-right mr-2 mt-2">
      <ContentOption @ChangeOption="ChangeValue"/>
    </div>
    <div class="">
        <STContent :Choose="this.SelectOption"/>
    </div>
  </div>
  
</template>

<script>
import ContentOption from '@/components/ContentOption.vue'
import STContent from '@/components/STContent.vue'

export default {
  name: 'ST',
  props: {
  },
  components: {
    ContentOption,
    STContent
  },
  data() {
      return {
          SelectOption: 1,
      }
  },
  methods: {
      ChangeValue(data) {
          this.SelectOption = data;
          console.log(data);
          console.log(this.SelectOption);
      }
  },
  setup() {
  }
}
</script>

<style scoped>

</style>