<script setup lang="ts">

</script>

<template>
<div class="w-full h-full relative flex flex-row">

    <div class="w-3/4 h-full bg-primary-200 flex flex-col justify-center items-start left-container relative">
        
        <Transition name="slide-fade-right" appear>
            <div class="logo-container mb-8">
                <img src="@/assets/images/index_left_bottom_logo.png" alt="" class="object-cover h-full">
            </div>
        </Transition>

        <Transition name="slide-fade-in" appear>
            <div class="text-zinc-50 text-2xl font-bold tracking-widest mb-8">
                我們用 PMG 務實、時尚、自然，成就關於美的一切
            </div>
        </Transition>

        <Transition name="slide-fade-in2" appear>
            <div class="flex flex-row justify-center items-center text-zinc-50 text-xl">
                <div class="flex flex-col justify-center items-start mr-4">
                    <div class="mb-3 font-normal">Pragmatic</div>
                    <div class="mb-3 font-normal">Modern</div>
                    <div class="mb-3 font-normal">Green</div>
                </div>
                <div class="flex flex-col justify-center items-start">
                    <div class="mb-3 font-bold">頂真精神，誠信負責、把事情做到最好</div>
                    <div class="mb-3 font-bold">建築觀點因時因地制宜，反映當代生活風格</div>
                    <div class="mb-3 font-bold">以緣相映的哲學，自然而然與環境共生</div>
                </div>
            </div>
        </Transition>

        <Transition name="slide-fade-up" appear>
            <div class="absolute bottom-16 right-8 text-4xl font-bold text-zinc-50 vertiacl-text">
                職人態度
            </div>
        </Transition>

    </div>

    <div class="w-1/4 h-full bg-primary-400 relative">

        <Transition name="slide-fade-down" appear>
            <div class="absolute bottom-16 left-8 text-4xl font-bold text-zinc-600 vertiacl-text">
                風格專屬
            </div>
        </Transition>

    </div>

</div>
</template>

<style scoped>
.logo-container {
    height: 25%;
}

.left-container {
    padding-top: 14%;
    padding-left: 7%;
}

.vertiacl-text {
    writing-mode: vertical-lr;
    letter-spacing: 2.0em;
}



.slide-fade-in-enter-active {
	transition: all 1.8s ease-out;
}

.slide-fade-in-leave-active {
	transition: all 1.8s ease-out;
}

.slide-fade-in-enter-from,
.slide-fade-in-leave-to {
	opacity: 0;
}


.slide-fade-in2-enter-active {
	transition: all 2.5s ease-out;
}

.slide-fade-in2-leave-active {
	transition: all 2.5s ease-out;
}

.slide-fade-in2-enter-from,
.slide-fade-in2-leave-to {
	opacity: 0;
}

</style>