<script setup lang="ts">
</script>

<template>
    <header class="flex justify-between shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
        <div class="flex gap-4 p-8">
            <img src="/logo.svg" alt="Logo" />
            <div class="flex-col">
                <p class="text-[12px]">REACT SNEAKERS</p>
                <p class="text-[12px]">Магазин лучших кроссовок</p>
            </div>
        </div>

        <nav class="flex gap-[16px] p-8">
            <div class="flex gap-[6px] items-center">
                <img src="/cart.svg" alt="Cart" class="w-[18px] h-[18px]" />
                <p class="text-[12px]">1205 руб.</p>
            </div>

            <div class="flex gap-[6px] items-center">
                <img src="/favourite.svg" alt="Favourite" class="w-[18px] h-[18px]" />
                <p class="text-[12px]">Закладки</p>
            </div>

            <div class="flex gap-[6px] items-center">
                <img src="/profile.svg" alt="Profile" class="w-[18px] h-[18px]" />
                <p class="text-[12px]">Профиль</p>
            </div>
        </nav>
    </header>
</template>
<style scoped></style>