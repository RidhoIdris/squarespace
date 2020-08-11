<template>
  <div class="py-32 relative -lg:px-4" style="background-color:#F0F0F0">
      <img data-aos="fade-left" src="../assets/img/flower4.png" class="absolute  right-0 top-0 -lg:hidden">
      <div class="container mx-auto h-full flex -lg:flex-col justify-between items-center">
          <div class="flex flex-col -lg:items-center -lg:text-center space-y-4 lg:space-y-8">
              <h1 data-aos="fade-down" class="font-medium -lg:text-center text-3xl md:text-4xl lg:text-5xl leading-none">Templates for every<br class="-lg:hidden"/>style and purpose.</h1>
              <p data-aos="fade-left" class="lg:font-medium lg:text-xl leading-none">Whether you’re looking to build a portfolio website<br class="-lg:hidden"/>or an online store, there’s a template for you.</p>
              <span data-aos="fade-left" class="-lg:hidden">SELECT YOUR GOAL</span>
              <ul class="-lg:hidden">
                  <li data-aos="fade-left" @mouseover="change(0)" class="font-medium text-2xl hover:text-gray-700 cursor-pointer">Build a portfolio</li>
                  <li data-aos="fade-left" @mouseover="change(1)" class="font-medium text-2xl hover:text-gray-700 cursor-pointer">Start a blog</li>
                  <li data-aos="fade-left" @mouseover="change(2)" class="font-medium text-2xl hover:text-gray-700 cursor-pointer">Create an online store</li>
                  <li data-aos="fade-left" @mouseover="change(3)" class="font-medium text-2xl hover:text-gray-700 cursor-pointer">Sell services</li>
                  <li data-aos="fade-left" @mouseover="change(4)" class="font-medium text-2xl hover:text-gray-700 cursor-pointer">Market a business</li>
                  <li data-aos="fade-left" @mouseover="change(5)" class="font-medium text-2xl hover:text-gray-700 cursor-pointer">Promote a restaurant</li>
                  <li data-aos="fade-left" @mouseover="change(6)" class="font-medium text-2xl hover:text-gray-700 cursor-pointer">Sell apparel</li>
              </ul>
              <div data-aos="fade-left" class="flex cursor-pointer items-center space-x-2">
                    <span class="font-medium">ALL TEMPLATES</span>
                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5303 6.53033C12.8232 6.23744 12.8232 5.76256 12.5303 5.46967L7.75736 0.696699C7.46447 0.403806 6.98959 0.403806 6.6967 0.696699C6.40381 0.989593 6.40381 1.46447 6.6967 1.75736L10.9393 6L6.6967 10.2426C6.40381 10.5355 6.40381 11.0104 6.6967 11.3033C6.98959 11.5962 7.46447 11.5962 7.75736 11.3033L12.5303 6.53033ZM0 6.75H12V5.25H0V6.75Z" fill="black"/>
                    </svg>
                </div>
          </div>
          <carousel :navigateTo="active" perPage="1" paginationActiveColor="#F0D9F0" paginationColor="#515151" class="flex justify-center items-center lg:w-60p lg:-mb-64 -lg:mt-8 relative" style="z-index:99999">
            <slide>
              <div class="relative -lg:mx-auto animate__animated animate__fadeIn">
                <img src="../assets/img/templates1_1_1.png" class="-lg:hidden">
                <img src="../assets/img/templates1.png" class="lg:hidden -lg:w-full -md:hidden">
                <img src="../assets/img/templates1_1.png" class="lg:hidden -lg:hidden -md:block -md:mx-auto">
              </div>
            </slide>
            <slide>
              <div class="relative  -lg:mx-auto animate__animated animate__fadeIn">
                <img src="../assets/img/templates1_1_1.png" class="-lg:hidden">
                <img src="../assets/img/templates1.png" class="lg:hidden -lg:w-full -md:hidden">
                <img src="../assets/img/templates1_1.png" class="lg:hidden -lg:hidden -md:block -md:mx-auto">
              </div>
            </slide>
            <slide>
              <div class="relative  -lg:mx-auto animate__animated animate__fadeIn">
                <img src="../assets/img/templates1_1_1.png" class="-lg:hidden">
                <img src="../assets/img/templates1.png" class="lg:hidden -lg:w-full -md:hidden">
                <img src="../assets/img/templates1_1.png" class="lg:hidden -lg:hidden -md:block -md:mx-auto">
              </div>
            </slide>
            <slide>
              <div class="relative -lg:mx-auto animate__animated animate__fadeIn">
                <img src="../assets/img/templates1_1_1.png" class="-lg:hidden">
                <img src="../assets/img/templates1.png" class="lg:hidden -lg:w-full -md:hidden">
                <img src="../assets/img/templates1_1.png" class="lg:hidden -lg:hidden -md:block -md:mx-auto">
              </div>
            </slide>
            <slide>
              <div class="relative -lg:mx-auto animate__animated animate__fadeIn">
                <img src="../assets/img/templates1_1_1.png" class="-lg:hidden">
                <img src="../assets/img/templates1.png" class="lg:hidden -lg:w-full -md:hidden">
                <img src="../assets/img/templates1_1.png" class="lg:hidden -lg:hidden -md:block -md:mx-auto">
              </div>
            </slide>
            <slide>
              <div class="relative -lg:mx-auto animate__animated animate__fadeIn">
                <img src="../assets/img/templates1_1_1.png" class="-lg:hidden">
                <img src="../assets/img/templates1.png" class="lg:hidden -lg:w-full -md:hidden">
                <img src="../assets/img/templates1_1.png" class="lg:hidden -lg:hidden -md:block -md:mx-auto">
              </div>
            </slide>
            <slide>
            <div class="relative -lg:mx-auto animate__animated animate__fadeIn">
              <img src="../assets/img/templates1_1_1.png" class="-lg:hidden">
                <img src="../assets/img/templates1.png" class="lg:hidden -lg:w-full -md:hidden">
                <img src="../assets/img/templates1_1.png" class="lg:hidden -lg:hidden -md:block -md:mx-auto">
            </div>
            </slide>

          </carousel>
      </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
    name : 'Templates',
    data(){
        return{
            active : 0,
        }
    },
    methods: {
      change(data) {
          this.active = Number(data)
      },
    },
    components:{
      Carousel,Slide
    },
}
</script>

<style>
  @media screen and (min-width: 1024px) {
    .VueCarousel-pagination{
      visibility: hidden !important;
    }
  }
</style>