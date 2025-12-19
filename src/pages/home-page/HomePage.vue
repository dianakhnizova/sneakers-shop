<script setup lang="ts" >
import Button from '../../components/Button.vue';

const toSneakers = () => {
    console.log('saklsj')
}
</script>

<template>
    <main class="flex-col gap-16 bg-white w-4/5 shadow-md m-auto h-screen rounded-xl mt-10">
        <Button label="Sneakers" @click="toSneakers" />
    </main>
</template>

<style scoped>

</style>