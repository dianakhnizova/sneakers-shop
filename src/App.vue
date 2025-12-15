<script setup lang="ts" >
import Header from './components/Header.vue';

</script>

<template>
    <main class="flex-col gap-16 bg-white w-4/5 shadow-md m-auto h-screen rounded-xl mt-10">
              <Header />
  <router-view />
    </main>
</template>

