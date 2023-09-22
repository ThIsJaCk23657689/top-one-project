<script setup lang="ts">

</script>

<template>
<div class="w-full h-full carousel-slide">
    <img src="@/assets/images/materials/Rinnai/01.jpg" class="object-cover h-full">
    <div class="card text-white top">
        隱藏式強化玻璃 <br/>
        導煙設計排油煙機
    </div>
    <div class="card text-white bottom">
        黑色玻璃檯面式 <br/>
        防漏二口瓦斯爐
    </div>
</div>
</template>

<style scoped>
.card {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15%;
    height: 9%;
    background-color: black;
    border-radius: 20px;
    letter-spacing: 0.1rem;
    text-align: center;
}

.card.top {
    top: 30%;
    left: 10%;
}

.card.bottom {
    bottom: 25%;
    left: 10%;
}
</style>
