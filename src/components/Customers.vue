<template>
  <div class="py-24 -lg:px-4">
      <h1 data-aos="fade-down" class="font-medium text-5xl container mx-auto leading-none">Explore how customers<br/> use our platform.</h1>
      <div class="flex -lg:flex-col">
          <div class="px-8 flex-col flex justify-end">
            <img data-aos="fade-down-right" src="../assets/img/customer1.png" class="animate">
            <p data-aos="fade-up" class="font-medium text-2xl w-40">Photographer Winona Ryder</p>
          </div>
          <div class="px-8 flex-col flex justify-end">
            <img data-aos="fade-down-left" src="../assets/img/customer2.png" class="animate">
            <p data-aos="fade-up" class="font-medium text-2xl w-40">Restaurant Danny Bowien</p>
          </div>
          <div class="px-8 flex-col flex justify-end">
            <img data-aos="fade-down-right" src="../assets/img/customer3.png" class="animate">
            <p data-aos="fade-up" class="font-medium text-2xl w-64">Creative Professional Altrock</p>
          </div>
      </div>
      <div class="flex justify-end px-8 mt-8">
          <img src="../assets/img/pagination.png">
      </div>
  </div>
</template>

<script>
export default {
    name :'Customers'
}
</script>