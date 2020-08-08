<template>
    <div class="flex items-center relative py-16 -lg:px-4">
        <div class="container mx-auto relative">
        <img src="../assets/img/flower3.png" class="absolute left-0 w-56 -ml-32 mt-16">
            <div class="flex -lg:flex-col">
                <h1 data-aos="fade-down" class="font-medium text-4xl lg:text-5xl leading-none">Guides for<br class="-lg:hidden"/>getting started.</h1>
                <div class="lg:w-50p lg:ml-32 -lg:mt-16">
                    <Accordion data-aos="fade-up-left" class="border-t-2" title="How to make a website">
                            <ol class="list-decimal ml-4 space-y-4 text-lg font-medium">
                                <li><span style="left:22px" class="relative">Choose a template and start a free trial.</span></li>
                                <li><span style="left:22px" class="relative">Get a domain name for your site - get a free custom domain name for the first year of an annual website plan.</span></li>
                                <li><span style="left:22px" class="relative">Use the CMS website builder tools to add your own text and photos.</span></li>
                                <li><span style="left:22px" class="relative">Make a website that fits your brand by choosing from hundreds of fonts, colors, and stock photo options.</span></li>
                                <li><span style="left:22px" class="relative">If you don’t have a logo, you can create a logo using the free logo maker.</span></li>
                                <li><span style="left:22px" class="relative">Publish your site and promote it using social media features and email marketing tools.</span></li>
                            </ol>
                    </Accordion>
                    <Accordion data-aos="fade-up-left" title="How to start an online store">
                            <ol class="list-decimal ml-4 space-y-4 text-lg font-medium">
                                <li><span style="left:22px" class="relative">Choose a template and start a free trial.</span></li>
                                <li><span style="left:22px" class="relative">Get a domain name for your site - get a free custom domain name for the first year of an annual website plan.</span></li>
                                <li><span style="left:22px" class="relative">Use the CMS website builder tools to add your own text and photos.</span></li>
                                <li><span style="left:22px" class="relative">Make a website that fits your brand by choosing from hundreds of fonts, colors, and stock photo options.</span></li>
                                <li><span style="left:22px" class="relative">If you don’t have a logo, you can create a logo using the free logo maker.</span></li>
                                <li><span style="left:22px" class="relative">Publish your site and promote it using social media features and email marketing tools.</span></li>
                            </ol>
                    </Accordion>
                    <Accordion data-aos="fade-up-left" title="How to start a blog">
                            <ol class="list-decimal ml-4 space-y-4 text-lg font-medium">
                                <li><span style="left:22px" class="relative">Choose a template and start a free trial.</span></li>
                                <li><span style="left:22px" class="relative">Get a domain name for your site - get a free custom domain name for the first year of an annual website plan.</span></li>
                                <li><span style="left:22px" class="relative">Use the CMS website builder tools to add your own text and photos.</span></li>
                                <li><span style="left:22px" class="relative">Make a website that fits your brand by choosing from hundreds of fonts, colors, and stock photo options.</span></li>
                                <li><span style="left:22px" class="relative">If you don’t have a logo, you can create a logo using the free logo maker.</span></li>
                                <li><span style="left:22px" class="relative">Publish your site and promote it using social media features and email marketing tools.</span></li>
                            </ol>
                    </Accordion>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Accordion from './Atom/Accordion';
export default {
    name : 'GettingStarted',
    components : {
        Accordion
    }
}
</script>