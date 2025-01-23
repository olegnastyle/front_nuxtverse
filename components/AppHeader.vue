<script setup lang="ts">
import { NuxtLink } from '#components';

</script>

<template>
    <header class="w-full mx-auto lg:container px-3 lg:px-0 py-3 lg:py-6 bg-white">
        <div class="flex flex-wrap items-center justify-between">
            <!-- десктопная шапка -->
            <nav class="flex items-center gap-8">
                <NuxtLink to="/" class="flex items-center gap-3">
                    <img class="w-8 h-8" src="@/public/favicon.png" alt="Логотип">
                    <p class="font-bold text-2xl">NuxtVerse</p>
                </NuxtLink>
                <ul class="hidden lg:flex items-center gap-6 text-lg font-semibold">
                    <li><a class="flex gap-2 text-black/50" href="#">Продукты<span class="rotate-90">›</span></a></li>
                    <li><a class="flex gap-2 text-black/50" href="#">Услуги<span class="rotate-90">›</span></a></li>
                    <li><a class="flex gap-2 text-black/50" href="#">Цены<span class="rotate-90">›</span></a></li>
                    <li><a class="flex gap-2 text-black/50" href="#">Ресурсы<span class="rotate-90">›</span></a></li>
                    <li><NuxtLink class="flex gap-2 text-black/50" to="/about">О нас</NuxtLink></li>
                </ul>
            </nav>
            <div class="hidden lg:flex gap-3 text-xl font-semibold">
                <button class="flex items-center justify-center py-2 px-5 text-black/50 bg-white border border-black/10 rounded-md shadow-md hover:brightness-90 active:brightness-75 cursor-pointer">Войти</button>
                <button class="py-2 px-5 text-white bg-teal-600 hover:brightness-90 active:brightness-75 rounded-md shadow-md inset-shadow-sm inset-shadow-white/20 ring ring-teal-600 inset-ring inset-ring-white/15 cursor-pointer">Создать профиль</button>
            </div>
            <!-- / десктопная шапка -->

            <!-- мобильная шапка -->
            <input id="mobile-menu" class="hidden peer/menu" type="checkbox">
            <label for="mobile-menu" class="block peer-checked/menu:hidden lg:hidden cursor-pointer">
                <svg for="mobile-menu" viewBox="0 0 32 32" class="size-10">
                    <path class="line hamburger_open" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                    <path class="line" d="M7 16 27 16"></path>
                </svg>
            </label>
            <label for="mobile-menu" class="hidden peer-checked/menu:block lg:hidden cursor-pointer ">
                <svg for="mobile-menu" viewBox="0 0 32 32" class="size-10 -rotate-45">
                    <path class="line hamburger_close" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                    <path class="line" d="M7 16 27 16"></path>
                </svg>
            </label>
            <div class="hidden lg:hidden peer-checked/menu:block w-full overflow-hidden animal_burger">
                <nav class="border-b">
                    <ul class="py-6 font-semibold">
                        <li><a class="flex justify-between py-3 text-black" href="#">Продукты
                            <span class="text-black/50">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </a></li>
                        <li><a class="flex justify-between py-3 text-black" href="#">Услуги
                            <span class="text-black/50">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </a></li>
                        <li><a class="flex justify-between py-3 text-black" href="#">Цены
                            <span class="text-black/50">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </a></li>
                        <li><a class="flex justify-between py-3 text-black" href="#">Ресурсы
                            <span class="text-black/50">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </a></li>
                        <li><a class="flex justify-between py-3 text-black" href="#">О нас
                            <span class="text-black/50">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </a></li>
                    </ul>
                </nav>
                <nav class="my-6">
                    <ul class="grid grid-cols-2 gap-3">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Legal</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Sitemap</a></li>
                        <li><a href="#">Cookie setting</a></li>
                    </ul>
                </nav>
                <div class="flex flex-col lg:hidden gap-3 text-xl font-semibold">
                    <button class="py-2 px-5 text-white bg-teal-600 hover:brightness-90 active:brightness-75 rounded-md mx-0.5 shadow-md inset-shadow-sm inset-shadow-white/20 ring ring-teal-600 inset-ring inset-ring-white/15 cursor-pointer">Создать профиль</button>
                    <button class="flex items-center justify-center py-2 px-5 text-black/50 bg-white border border-black/10 rounded-md shadow-md hover:brightness-90 active:brightness-75 cursor-pointer">Войти</button>
                </div>
            </div>
            <!-- / мобильная шапка -->
        </div>
    </header>
</template>