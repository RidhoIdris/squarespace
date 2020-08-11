import Vue from 'vue'
import App from './App.vue'
import './assets/index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'animate.css/animate.min.css';
import MQ from 'vue-match-media/src'

Vue.use(MQ)
Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init()
  },
  mounted(){
    AOS.refresh
  },
  render: h => h(App),
}).$mount('#app')
