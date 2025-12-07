<script setup>
import { ref } from 'vue';
import Card from './components/Card.vue';

const isAdded = ref(true)
</script>

<template>
    <Card title="Puma" price="1200$" :isAdded="isAdded" />
</template>

<style scoped></style>
