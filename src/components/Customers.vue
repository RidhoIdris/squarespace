<template>
  <div class="py-10 lg:py-24 -lg:px-4 overflow-hidden">
      <h1 data-aos="fade-down" class="font-medium text-3xl md:text-4xl lg:text-5xl container mx-auto leading-none">Explore how customers<br/> use our platform.</h1>
      <div class="swiper-container">
          <div class="swiper-wrapper flex">
              <div class="px-8 flex-col flex justify-end swiper-slide">
                  <img data-aos="fade-down-right" src="../assets/img/customer1.png" class="animate">
                  <p data-aos="fade-up" class="font-medium text-2xl w-40">Photographer Winona Ryder</p>
              </div>
              <div class="px-8 flex-col flex justify-end swiper-slide">
                  <img data-aos="fade-down-right" src="../assets/img/customer2.png" class="animate2">
                  <p data-aos="fade-up" class="font-medium text-2xl w-40">Photographer Winona Ryder</p>
              </div>
              <div class="px-8 flex-col flex justify-end swiper-slide">
                  <img data-aos="fade-down-right" src="../assets/img/customer3.png" class="animate">
                  <p data-aos="fade-up" class="font-medium text-2xl w-40">Photographer Winona Ryder</p>
              </div>
              <div class="px-8 flex-col flex justify-end swiper-slide">
                  <img data-aos="fade-down-right" src="../assets/img/customer2.png" class="animate2">
                  <p data-aos="fade-up" class="font-medium text-2xl w-40">Photographer Winona Ryder</p>
              </div>
              <div class="px-8 flex-col flex justify-end swiper-slide">
                  <img data-aos="fade-down-right" src="../assets/img/customer1.png" class="animate">
                  <p data-aos="fade-up" class="font-medium text-2xl w-40">Photographer Winona Ryder</p>
              </div>
              <div class="px-8 flex-col flex justify-end swiper-slide">
                  <img data-aos="fade-down-right" src="../assets/img/customer3.png" class="animate2">
                  <p data-aos="fade-up" class="font-medium text-2xl w-40">Photographer Winona Ryder</p>
              </div>
          </div>
          <div class="my-10 flex justify-end -lg:justify-center items-center px-10 space-x-3 asd">
            <button class="focus:outline-none swiper-pagination space-x-1 bulet">
            </button>
            <button class="focus:outline-none prev z-20  -lg:hidden">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="black"/>
              </svg>
            </button>
            <button class="focus:outline-none next z-20  -lg:hidden">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="black"/>
              </svg>
            </button>
          </div>
      </div>
  </div>
</template>

<script scoped>
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
export default {
    name :'Customers',
    mounted() {
      new Swiper('.swiper-container', {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.next',
        prevEl: '.prev',
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
          900: {
            slidesPerView: 3,
            pagination: {
              type: 'fraction',
            },
          }
        }
    });
    },
}
</script>
<style scoped>
  @media screen and (min-width: 992px) {
    .bulet{
      margin-left: -120px !important;
      text-align :right !important;
      margin-bottom: 30px !important;
    }
  }
  /* .swiper-pagination{
    text-align :right !important;
    padding-right: 120px !important;
    margin-bottom: -11px !important;
  }
  .swiper-container{
    overflow: visible;
  } */
</style>