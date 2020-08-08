<template>
  <div class="h-auto relative overflow-hidden">
    <img src="../assets/img/slider1.png">
    <div class="absolute top-0 left-0 z-10 p-16 space-x-16 flex items-center h-full justify-between">
        <img src="../assets/img/slider1_1.png" class="w-50p">
        <div class="relative" style="background-color:#325B73">
            <div class="p-8 text-white font-medium z-10 absolute top-0 left-0 h-full flex flex-col justify-between">
                <div class="space-y-5 ">
                    <h1 data-aos="fade-down" class="text-lg leading-none w-80p">DESIGNER</h1>
                    <p data-aos="fade-down" class="text-2xl leading-tight">“A blog connects you in a personal way with your clients and online visitors.”</p>
                </div>
                <div data-aos="fade-left" class="flex cursor-pointer items-center space-x-2">
                    <span>BROWSE EXTENSIONS</span>
                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5303 6.53033C12.8232 6.23744 12.8232 5.76256 12.5303 5.46967L7.75736 0.696699C7.46447 0.403806 6.98959 0.403806 6.6967 0.696699C6.40381 0.989593 6.40381 1.46447 6.6967 1.75736L10.9393 6L6.6967 10.2426C6.40381 10.5355 6.40381 11.0104 6.6967 11.3033C6.98959 11.5962 7.46447 11.5962 7.75736 11.3033L12.5303 6.53033ZM0 6.75H12V5.25H0V6.75Z" fill="white"/>
                    </svg>
                </div>
            </div>
            <img src="../assets/img/slider1_1_1.png" class="relative top-0">
        </div>
    </div>
  </div>
</template>

<script>
// import Swiper from 'swiper/bundle';
// import 'swiper/swiper-bundle.css'
export default {
    name: 'Slider',
    mounted: function () {
        // new Swiper('.swiper-container', {
        //     direction: 'horizontal',
        //     loop: true,
        //     pagination: {
        //         el: '.swiper-pagination',
        //     },
        //     navigation: {
        //         nextEl: '.swiper-button-next',
        //         prevEl: '.swiper-button-prev',
        //     },
        // })
    }
}
</script>