<template>
    <div class="bg-black text-white flex items-center relative py-16 -lg:px-4 overflow-hidden">
        <div class="container mx-auto relative">
            <h1 data-aos="fade-down" class="font-medium text-4xl lg:text-5xl leading-none">We’ve got you<br class="-lg:hidden"/>covered, 24/7.</h1>
            <img data-aos="fade-left" src="../assets/img/buterfly.png" class="absolute right-0 top-0 w-10p lg:w-40 -mt-10">
            <div class="flex -lg:flex-col">
                <div class="mt-12 lg:w-40p lg:pr-10p">
                    <p data-aos="fade-rigt" class="font-medium">When you create a website with Squarespace, you get free unlimited hosting, top-of-the-line security, and dependable resources to help you succeed. You can count on personalized support around the clock by email, live chat, or by joining a live webinar.</p>
                    <div data-aos="fade-rigt" class="flex cursor-pointer items-center space-x-2 mt-4">
                        <span>VISIT HELP CENTER</span>
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5303 6.53033C12.8232 6.23744 12.8232 5.76256 12.5303 5.46967L7.75736 0.696699C7.46447 0.403806 6.98959 0.403806 6.6967 0.696699C6.40381 0.989593 6.40381 1.46447 6.6967 1.75736L10.9393 6L6.6967 10.2426C6.40381 10.5355 6.40381 11.0104 6.6967 11.3033C6.98959 11.5962 7.46447 11.5962 7.75736 11.3033L12.5303 6.53033ZM0 6.75H12V5.25H0V6.75Z" fill="white"/>
                        </svg>
                    </div>
                </div>
                <div class="mt-12  lg:w-50p">
                    <Accordion data-aos="fade-left" stroke="text-white" class="border-t-2" title="What does a Squarespace subscription include?">
                            <p>Squarespace is an all-in-one content management system, or CMS. With a single subscription, you can create a website, host your content, register your own custom domain name, sell products, track your site’s analytics, and much more.</p>
                            <p>Start with any template to create pages and organize your site, then customize it to match your own style.</p>
                            <p>For a full list of features, visit our feature index and explore the Help Center for guides on Squarespace's many features.</p>
                    </Accordion>
                    <Accordion data-aos="fade-left" stroke="text-white" title="Is Squarespace right for me?">
                        <p>Squarespace is an all-in-one content management system, or CMS. With a single subscription, you can create a website, host your content, register your own custom domain name, sell products, track your site’s analytics, and much more.</p>
                        <p>Start with any template to create pages and organize your site, then customize it to match your own style.</p>
                        <p>For a full list of features, visit our feature index and explore the Help Center for guides on Squarespace's many features.</p>
                    </Accordion>
                    <Accordion data-aos="fade-left" stroke="text-white" title="Can I move to Squarespace from another platform?">
                            <p>Squarespace is an all-in-one content management system, or CMS. With a single subscription, you can create a website, host your content, register your own custom domain name, sell products, track your site’s analytics, and much more.</p>
                            <p>Start with any template to create pages and organize your site, then customize it to match your own style.</p>
                            <p>For a full list of features, visit our feature index and explore the Help Center for guides on Squarespace's many features.</p>
                    </Accordion>
                    <Accordion data-aos="fade-left" stroke="text-white" title="Can someone build my site for me?">
                            <p>Squarespace is an all-in-one content management system, or CMS. With a single subscription, you can create a website, host your content, register your own custom domain name, sell products, track your site’s analytics, and much more.</p>
                            <p>Start with any template to create pages and organize your site, then customize it to match your own style.</p>
                            <p>For a full list of features, visit our feature index and explore the Help Center for guides on Squarespace's many features.</p>
                    </Accordion>
                    <Accordion data-aos="fade-left" stroke="text-white" title="Have specific questions?">
                            <p>Squarespace is an all-in-one content management system, or CMS. With a single subscription, you can create a website, host your content, register your own custom domain name, sell products, track your site’s analytics, and much more.</p>
                            <p>Start with any template to create pages and organize your site, then customize it to match your own style.</p>
                            <p>For a full list of features, visit our feature index and explore the Help Center for guides on Squarespace's many features.</p>
                    </Accordion>
                </div>
            </div>
        </div>
        <img data-aos="fade-up" src="../assets/img/flower.png" class="absolute bottom-0 left-0 w-40p">
    </div>
</template>

<script>
import Accordion from './Atom/Accordion';
export default {
    name : 'Faq',
    components : {
        Accordion
    }
}
</script>