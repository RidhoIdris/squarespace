<template>
  <div class="h-screen overflow-hidden">
    <img src="../assets/img/bg.png" class="-md:hidden absolute z-10 top-0 h-screen w-full object-center object-cover" />
    <img src="../assets/img/bg-small.png" class="md:hidden absolute z-10 top-0 h-screen w-full object-center object-cover" />
    <!-- <div class="bg-black absolute top-0 z-20 bg-opacity-25 w-full h-screen"></div> -->
    <div :class="{'bg-black': scrollPosition > 50}" class="px-10 h-20 flex justify-between items-center fixed z-50 w-full">
      <img src="../assets/img/logo.png" class="w-56" />
      <ul :class="{ '-lg:hidden' : nav}" class="transition ease-in duration-200 flex -lg:pt-16 -lg:flex-col lg:space-x-10 font-bold text-white lg:justify-center lg:items-center -lg:fixed -lg:h-screen -lg:w-screen -lg:bg-black -lg:inset-0">
        <li class="cursor-pointer -lg:text-2xl -lg:px-8">PRODUCTS</li>
        <li class="cursor-pointer -lg:text-2xl -lg:px-8 -lg:mt-2">TEMPLETES</li>
        <li class="cursor-pointer -lg:text-2xl -lg:px-8 -lg:mt-2">RESOURCES</li>
        <li class="lg:hidden flex flex-col mt-auto items-center">
          <span class="text-white font-bold cursor-pointer mb-8">LOG IN</span>
          <button class="px-6 py-4 font-medium focus:outline-none bg-white w-full text-black">GET STARTED</button>
        </li>  
      </ul>
      <div class="flex space-x-10 justify-center items-center -lg:hidden">
        <span class="text-white font-bold cursor-pointer">LOG IN</span>
        <button class="px-6 py-4 font-medium focus:outline-none bg-white">GET STARTED</button>
      </div>
      <div @click="nav = !nav" class="space-y-1 cursor-pointer lg:hidden -lg:fixed right-0 -lg:px-8 -lg:z-10">
        <div style="height: 3px;" class="bg-white w-6"></div>
        <div style="height: 3px;" class="bg-white w-6"></div>
        <div style="height: 3px;" class="bg-white w-6"></div>
      </div>
    </div>
    <div class="container mx-auto -lg:px-4 relative z-30 md:h-60p mt-32">
      <img src="../assets/img/header.png" class="-md:hidden"/>
      <div class="h-full overflow-hidden">
        <div
          data-aos="fade-down"
          data-aos-delay="500"
          class="h-full md:bg-hero md:bg-opacity-25 md:px-8 flex flex-col md:justify-center"
        >
          <h1
            data-aos="fade-left"
            data-aos-delay="800"
            class="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-none"
          >
            Build your
            <br class="-md:hidden"/>online presence.
          </h1>
          <div class="flex -md:flex-col -md:space-y-4 md:space-x-4 mt-6 md:mt-8 md:items-center">
            <button
              data-aos="fade-left"
              data-aos-delay="850"
              class="px-6 hover:bg-gray-300 py-4 w-40 font-medium focus:outline-none bg-white"
            >GET STARTED</button>
            <p data-aos="fade-left" data-aos-delay="900" class="text-white font-bold">
              Start your free website trial today.
              <br />No credit card required.
            </p>
          </div>
        </div>
      </div>
      <img src="../assets/img/header.png" class="md:hidden" />
      <div
          class="md:hidden h-40vh bg-hero bg-opacity-25 px-8 flex flex-col justify-center"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      nav : true,
      scrollPosition: null
    }
  },
  methods: {
    updateScroll() {
       this.scrollPosition = window.scrollY
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  }
};
</script>
