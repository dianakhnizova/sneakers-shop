<script setup lang="ts">
interface Props {
    imgUrl: string
    title: string;
    price: number;
    isAdded: boolean;
    isFavorite: boolean;
    onClickAdd: ()=> void;
    onClickFavorite: ()=> void
}

const props = defineProps<Props>();


</script>

<template>
    <div class="flex-col w-[210px] rounded-3xl border border-grey shadow-sm p-4 cursor-pointer transition hover:shadow-xl">
        <img :src="isFavorite ? '/like.svg' : '/like-dis.svg'" alt="Like" @click="onClickFavorite">

        <img :src="imgUrl" alt="sneakers">
        <p>{{title}}</p>

        <div class="flex gap-[8px] justify-between items-center">
            <p class="font-bold">{{price}}</p>
            <img :src="isAdded ? '/added.svg' : '/add.svg'" alt="Add" @click="onClickAdd">
        </div>
    </div>
</template>

<style scoped></style>