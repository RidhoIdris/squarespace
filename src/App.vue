<template>
  <div id="app" class="font-roboto">
    <Header/>
    <Ideas/>
    <Templates/>
    <Slider class="-lg:hidden"/>
    <OnBrand/>
    <GettingStarted/>
    <Customers/>
    <Inspired/>
    <Faq/>
    <FooterCta/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Ideas from './components/Ideas.vue'
import Templates from './components/Templates.vue'
import Slider from './components/Slider.vue'
import OnBrand from './components/OnBrand.vue'
import GettingStarted from './components/GettingStarted.vue'
import Customers from './components/Customers.vue'
import Inspired from './components/Inspired.vue'
import Faq from './components/Faq.vue'
import FooterCta from './components/FooterCta.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Ideas,
    Templates,
    Slider,
    OnBrand,
    GettingStarted,
    Customers,
    Inspired,
    Faq,
    FooterCta,
    Footer,
  }
}
</script>