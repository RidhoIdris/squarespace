<template>
    <div style="background-color:#F0F0F0" class="py-24 relative -lg:px-4">
        <img data-aos="fade-right" src="../assets/img/flower2.png" class="absolute top-0 right-0 w-30p">
        <div class="container mx-auto h-full flex-col flex justify-center space-y-6">
            <h1 data-aos="fade-down" class="font-medium text-4xl lg:text-5xl leading-none">Stay inspired with <br class="-lg:hidden"/> modern solutions.</h1>
            <p data-aos="fade-left" class="leading-none">Learn from Squarespace customers who are turning <br class="-lg:hidden"/> their dreams into a reality.</p>
            <div data-aos="fade-left" class="flex cursor-pointer items-center space-x-2">
                <span class="font-medium">EXPLORE THE BLOG</span>
                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5303 6.53033C12.8232 6.23744 12.8232 5.76256 12.5303 5.46967L7.75736 0.696699C7.46447 0.403806 6.98959 0.403806 6.6967 0.696699C6.40381 0.989593 6.40381 1.46447 6.6967 1.75736L10.9393 6L6.6967 10.2426C6.40381 10.5355 6.40381 11.0104 6.6967 11.3033C6.98959 11.5962 7.46447 11.5962 7.75736 11.3033L12.5303 6.53033ZM0 6.75H12V5.25H0V6.75Z" fill="black"/>
                </svg>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="lg:space-y-4 lg:row-span-3">
                    <div class="overflow-hidden relative">
                        <img data-aos="fade-right" src="../assets/img/inspired1.png" class="transition-image hover:scale-105 -lg:w-full">
                        <div class="absolute bottom-0 left-0 w-16 h-16 bg-white flex justify-center items-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 3L19 12L5 21V3Z" fill="black"/>
                            </svg>
                        </div>
                    </div>
                    <p data-aos="fade-right" class="font-medium lg:text-2xl">Black History Month: Creative Origins</p>
                </div>
                <div class="flex -lg:flex-col lg:space-x-4 font-medium lg:text-2xl">
                    <div data-aos="fade-left" class="overflow-hidden">
                        <img src="../assets/img/inspired2.png" class="transition-image hover:scale-105 -lg:w-full">
                    </div>
                    <p data-aos="fade-left" class="w-48">Trystan Reese on Queer Activism and Parenthood</p>
                </div>
                <div class="flex -lg:flex-col lg:space-x-4 font-medium lg:text-2xl">
                    <div data-aos="fade-left" class="overflow-hidden">
                        <img src="../assets/img/inspired3.png" class="transition-image hover:scale-105 -lg:w-full">
                    </div>
                    <p data-aos="fade-left" class="w-48">4 Sites Supporting Others During Coronavirus</p>
                </div>
                <div class="flex -lg:flex-col lg:space-x-4 font-medium lg:text-2xl">
                    <div data-aos="fade-left" class="overflow-hidden">
                        <img src="../assets/img/inspired4.png" class="transition-image hover:scale-105 -lg:w-full">
                    </div>
                    <p data-aos="fade-left" class="w-48">Honoring Cultural Heritage Through Cuisine</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Inspired'
}
</script>
