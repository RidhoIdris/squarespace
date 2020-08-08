<template>
  <div  class=" border-b-2 py-8">
    <div @click.prevent="active = !active" class="flex justify-between items-center cursor-pointer">
        <span class="font-medium text-xl md:text-2xl">{{ title }}</span>
        <svg :class="stroke" v-show="!active" width="24" height="24" viewBox="0 0 24 24" class="stroke-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5 12H19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg :class="stroke" v-show="active" width="24" height="24" viewBox="0 0 24 24" class="stroke-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>
    <div  v-show="active" class="mt-6 space-y-4">
        <slot />
    </div>
</div>
</template>

<script>
export default {
    name : 'Accordion',
    props: {
      title : {
        type: String,
        default: ''
      },
      stroke:{
        default:'text-black',
        type: String,
      }
    },
  data() {
    return {
      active: false,
    }
  }
}
</script>