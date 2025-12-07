<script setup lang="ts">
import { ItemsData } from '../sources/interfaces';
import CardList from './CardList.vue';

const props = defineProps<{
  items: ItemsData[]
}>()
</script>

<template>
    <div class="flex-col items-center w-[100%] m-auto p-10">
        <h2 class="mb-10">Все кроссовки</h2>

        <CardList :items="items"/>
    </div>
</template>
