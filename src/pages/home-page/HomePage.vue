<script setup lang="ts" >
import { onMounted, ref } from 'vue';
import Header from '../../components/Header.vue';
import Items from '../../components/Items.vue';
import { ItemsData } from '../../sources/interfaces';
import { fetchItems } from '../../api/fetchItems';

const items = ref<ItemsData[]>([])

onMounted(async () => {
   try {
    items.value = await fetchItems();
  } catch (error) {
    console.log("Не удалось загрузить товары", error);
  }
})
</script>

<template>
    <main class="flex-col gap-16 bg-white w-4/5 shadow-md m-auto h-screen rounded-xl mt-10">
        <Header />
        <Items :items="items" />
    </main>
</template>

