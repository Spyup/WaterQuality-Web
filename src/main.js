import {createApp} from 'vue'
import App from './App.vue'
import router from "./router/index"

createApp(App).use(router).mount("#app");
/*

import ST from "./view/ST.vue"
const routes = {
  '/': App,
  '/st': ST
}

const SimpleRouter = {
  data: () => ({
    currentRoute: window.location.pathname
  }),

  computed: {
    CurrentComponent() {
      return routes[this.currentRoute]
    }
  },

  render() {
    return h(this.CurrentComponent)
  }
}

createApp(SimpleRouter).mount('#app')*/