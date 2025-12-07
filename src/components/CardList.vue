<script setup lang="ts">
import { ItemsData } from '../sources/interfaces';
import Card from './Card.vue';

interface Props {
    items: ItemsData[]
}

const props = defineProps<Props>()

const clickAdd = () => {
    console.log('add item')
}

const clickFavorite = () => {
    console.log('like')
}
</script>

<template>
    <div class="grid grid-cols-4 gap-5 overflow-y-auto max-h-[600px]">
        <Card v-for="item in items" :key="item.id" :title="item.title" :price="item.price" :image-url="item.imageUrl"
            :is-added="item.isAdded" :is-favorite="item.isFavorite" @click-favorite="clickFavorite" @click-add="clickAdd" />
    </div>
</template>
