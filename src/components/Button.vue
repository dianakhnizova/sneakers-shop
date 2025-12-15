<script setup lang="ts">
  interface Props {
    label: string;
  }

  const props = defineProps<Props>()
</script>

<template>
  <button class="w-100px h-70px">{{ label }}</button>
</template>

<style scoped>
</style>