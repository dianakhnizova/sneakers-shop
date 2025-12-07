<script setup lang="ts">
interface Props {
    title: string;
    price: string;
    isAdded: boolean
}

const props = defineProps<Props>()
console.log(props)
</script>

<template>
    <div class="card">
        <p class="title">{{ props.title }}</p>
        <p class="title">{{ props.price }}</p>
        <p class="title">{{ props.isAdded }}</p>
    </div>
</template>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.title {
    font-size: 12px;
}
</style>