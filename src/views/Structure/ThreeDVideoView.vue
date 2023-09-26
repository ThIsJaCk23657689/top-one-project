<script setup lang="ts">

</script>

<template>
<div class="w-full h-full carousel-slide relative flex justify-center items-center">
    <video class="video" controls>
        <source src="@/assets/videos/top-one.mp4" type="video/webm" />
    </video>
</div>
</template>

<style scoped>
.video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
}
</style>
