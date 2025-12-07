<script setup lang="ts">
interface Props {
    imageUrl: string
    title: string;
    price: number;
    isAdded?: boolean;
    isFavorite?: boolean;
    onClickAdd: ()=> void;
    onClickFavorite: ()=> void
}

const props = defineProps<Props>();
</script>

<template>
    <div class="flex-col rounded-3xl border border-grey shadow-sm p-4 cursor-pointer transition hover:shadow-xl">
        <img :src="isFavorite ? '/like.svg' : '/like-dis.svg'" alt="Like" @click="onClickFavorite">

        <img :src="imageUrl" alt="Sneakers">
        <p>{{title}}</p>

        <div class="flex gap-[8px] justify-between items-center">
            <p class="font-bold">{{price}}</p>
            <img :src="isAdded ? '/added.svg' : '/add.svg'" alt="Add" @click="onClickAdd">
        </div>
    </div>
</template>
