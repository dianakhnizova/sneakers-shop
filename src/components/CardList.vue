<script setup lang="ts">
import Card from './Card.vue';

const clickAdd = () => {
    console.log('add item')
}

const clickFavorite = () => {
    console.log('like')
}
</script>

<template>
    <div class="grid grid-cols-4 gap-5">
        <Card img-url="/sneaker.jpg" title="asd" :price="123" :is-added="false" :is-favorite="false"
            @click-favorite="clickFavorite" @click-add="clickAdd" />
    </div>
</template>
<style scoped></style>