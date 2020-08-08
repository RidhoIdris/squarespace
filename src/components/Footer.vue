<template>
    <div class="-lg:py-16 lg:h-screen bg-black text-white flex items-center">
        <div class="-lg:px-4 px-10 flex -lg:flex-col w-full justify-between">
            <div class="space-y-5 -lg:order-2 -lg:flex -lg:flex-col -lg:justify-center -lg:items-center">
                <img src="../assets/img/logoo.png" class="order-3 -lg:mt-4">
                <button class="flex justify-between w-32 bg-gray-800 py-2 px-4 order-1">
                    <p>$ USD</p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5V19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M19 12L12 19L5 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <button class="flex justify-between w-32 bg-gray-800 py-2 px-4 order-2">
                    <p>ENGLISH</p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5V19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M19 12L12 19L5 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-5 lg:gap-16 lg:mr-16 -lg:order-1">
                <ul class="space-y-1 -lg:py-4 -lg:border-b-2 -lg:border-t-2">
                    <li @click.prevent="foot1 = !foot1" class="cursor-pointer lg:mb-5 flex justify-between items-center">
                        PRODUCTS 
                        <svg width="24" height="24" viewBox="0 0 24 24" class="stroke-current text-white lg:hidden" xmlns="http://www.w3.org/2000/svg">
                            <path v-show="foot1" d="M12 5V19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5 12H19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </li>
                    <div :class="{ '-lg:hidden' : foot1}" class="-lg:my-5 -lg:pl-5 -lg:space-y-1">
                        <li class="text-gray-500 cursor-pointer hover:text-white">WEBSITE TEMPLATES</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">WEBSITE</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">DOMAINS</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">ONLINE STORES</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">POINT OF SALE</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">EXTENSIONS</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">MARKETING TOOLS</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">EMAIL MARKETING</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">SCHEDULING</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">STORIES</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">PROFESSIONAL EMAIL</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">LOGO MAKER</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">PREMIUM PLAN</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">PRICING</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">PRICING</li>
                    </div>
                </ul>
                <ul class="space-y-1 -lg:py-4 -lg:border-b-2">
                    <li @click.prevent="foot2 = !foot2" class="cursor-pointer lg:mb-5 flex justify-between items-center">
                        PRODUCTS 
                        <svg width="24" height="24" viewBox="0 0 24 24" class="stroke-current text-white lg:hidden" xmlns="http://www.w3.org/2000/svg">
                            <path v-show="foot2" d="M12 5V19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5 12H19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </li>
                    <div :class="{ '-lg:hidden' : foot2}" class="-lg:my-5 -lg:pl-5 -lg:space-y-1">
                        <li class="text-gray-500 cursor-pointer hover:text-white">WEBSITE TEMPLATES</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">WEBSITE</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">DOMAINS</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">ONLINE STORES</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">POINT OF SALE</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">EXTENSIONS</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">MARKETING TOOLS</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">EMAIL MARKETING</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">SCHEDULING</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">STORIES</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">PROFESSIONAL EMAIL</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">LOGO MAKER</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">PRICING</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">FEATURE LIST</li>
                    </div>
                </ul>
                <ul class="space-y-1 -lg:py-4 -lg:border-b-2">
                    <li @click.prevent="foot3 = !foot3" class="cursor-pointer lg:mb-5 flex justify-between items-center">
                        PRODUCTS 
                        <svg width="24" height="24" viewBox="0 0 24 24" class="stroke-current text-white lg:hidden" xmlns="http://www.w3.org/2000/svg">
                            <path v-show="foot3" d="M12 5V19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5 12H19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </li>
                    <div :class="{ '-lg:hidden' : foot3}" class="-lg:my-5 -lg:pl-5 -lg:space-y-1">
                        <li class="text-gray-500 cursor-pointer hover:text-white">WEBSITE TEMPLATES</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">WEBSITE</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">DOMAINS</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">ONLINE STORES</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">POINT OF SALE</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">EXTENSIONS</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">MARKETING TOOLS</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">EMAIL MARKETING</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">SCHEDULING</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">STORIES</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">PROFESSIONAL EMAIL</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">LOGO MAKER</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">PRICING</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">FEATURE LIST</li>
                    </div>
                </ul>
                <ul class="space-y-1 -lg:py-4 -lg:border-b-2">
                    <li @click.prevent="foot4 = !foot4" class="cursor-pointer lg:mb-5 flex justify-between items-center">
                        PRODUCTS 
                        <svg width="24" height="24" viewBox="0 0 24 24" class="stroke-current text-white lg:hidden" xmlns="http://www.w3.org/2000/svg">
                            <path v-show="foot4" d="M12 5V19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5 12H19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </li>
                    <div :class="{ '-lg:hidden' : foot4}" class="-lg:my-5 -lg:pl-5 -lg:space-y-1">
                        <li class="text-gray-500 cursor-pointer hover:text-white">WEBSITE TEMPLATES</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">WEBSITE</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">DOMAINS</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">ONLINE STORES</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">POINT OF SALE</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">EXTENSIONS</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">MARKETING TOOLS</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">EMAIL MARKETING</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">SCHEDULING</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">STORIES</li>
                    </div>
                </ul>
                <ul class="space-y-1 -lg:py-4 -lg:border-b-2">
                    <li @click.prevent="foot5 = !foot5" class="cursor-pointer lg:mb-5 flex justify-between items-center">
                        PRODUCTS 
                        <svg width="24" height="24" viewBox="0 0 24 24" class="stroke-current text-white lg:hidden" xmlns="http://www.w3.org/2000/svg">
                            <path v-show="foot5" d="M12 5V19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5 12H19" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </li>
                    <div :class="{ '-lg:hidden' : foot5}" class="-lg:my-5 -lg:pl-5 -lg:space-y-1">
                        <li class="text-gray-500 cursor-pointer hover:text-white">WEBSITE TEMPLATES</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">WEBSITE</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">DOMAINS</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">ONLINE STORES</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">POINT OF SALE</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">EXTENSIONS</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">MARKETING TOOLS</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">EMAIL MARKETING</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">SCHEDULING</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">STORIES</li>
                        <li class="text-gray-500 cursor-pointer hover:text-white">PROFESSIONAL EMAIL</li>
                    </div>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Footer',
    data() {
        return {
            foot1: true,
            foot2: true,
            foot3: true,
            foot4: true,
            foot5: true,
        }
  }
}
</script>