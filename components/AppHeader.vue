<template>
    <header class="w-full mx-auto lg:container px-3 py-3 lg:py-6">
        <div class="flex flex-wrap items-center justify-between">
            <!-- десктопная шапка -->
            <nav class="flex items-center gap-8">
                <!-- логотип -->
                <NuxtLink to="/" class="flex items-center justify-center gap-3 relative text-emerald-500 hover:text-emerald-600 active:text-emerald-500">
                    <img class="absolute w-12 h-12 rotate-180" src="@/public/favicon.png" alt="Логотип">
                    <p class="font-bold text-2xl">Nuxt &nbsp;<span class="relative z-10">Verse</span></p>
                </NuxtLink>
                <!-- панель навигации -->
                <ul class="hidden lg:flex items-center gap-6 text-lg font-semibold ">
                    <li>
                        <NuxtLink class="flex gap-2 text-black/50 hover:text-black/80 active:text-emerald-600 transition-all" to="/products">Продукты</NuxtLink>
                    </li>
                    <li class="flex items-center gap-2 relative transition-transform hover:*:nth-[2]:rotate-180
                            hover:*:z-40 hover:*:opacity-100 hover:*:translate-y-0 hover:*:scale-100">
                        <NuxtLink class="flex gap-2 text-black/50 hover:text-black/80 active:text-emerald-600 transition-all" to="/services">Услуги</NuxtLink>
                        <svg class="text-black/50 size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                        <!-- под меню Услуги -->
                        <ul class="-z-10  transition-transform duration-300 ease-in-out transform opacity-0 translate-y-4 scale-95 absolute top-7 w-96 p-2 bg-white rounded-lg border border-black/10 shadow-lg">
                            <li>
                                <NuxtLink to="/blog" class="flex gap-3 w-full p-2 rounded-md hover:bg-emerald-600/10 active:bg-emerald-600/20 transition-all">
                                    <svg class="text-emerald-600 size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM6 7H12V13H6V7ZM8 9V11H10V9H8ZM14 9H18V7H14V9ZM18 13H14V11H18V13ZM6 15V17L18 17V15L6 15Z"></path></svg>
                                    <div>
                                        <h3>Блог</h3>
                                        <p class="text-black/50 font-normal">Последние отраслевые новости, обновления и информация.</p>
                                    </div>
                                </NuxtLink>
                            </li>
                            <li>
                                <a href="#" class="flex gap-3 w-full p-2 rounded-md hover:bg-emerald-600/10 active:bg-emerald-600/20 transition-all">
                                    <svg class="text-emerald-600 size-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 20H20V22H12C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.2512 21.2561 16.3287 20.0007 18H17.2916C18.9525 16.5341 20 14.3894 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8C14 9.10457 13.1046 10 12 10ZM8 14C6.89543 14 6 13.1046 6 12C6 10.8954 6.89543 10 8 10C9.10457 10 10 10.8954 10 12C10 13.1046 9.10457 14 8 14ZM16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12C18 13.1046 17.1046 14 16 14ZM12 18C10.8954 18 10 17.1046 10 16C10 14.8954 10.8954 14 12 14C13.1046 14 14 14.8954 14 16C14 17.1046 13.1046 18 12 18Z"></path></svg>
                                    <div>
                                        <h3>Видео гайды</h3>
                                        <p class="text-black/50 font-normal">Ознакомьтесь с нашими новейшими функциями и подробными руководствами.</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex gap-3 w-full p-2 rounded-md hover:bg-emerald-600/10 active:bg-emerald-600/20 transition-all">
                                    <svg class="text-emerald-600 size-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10.9999 12L3.92886 19.0711L2.51465 17.6569L8.1715 12L2.51465 6.34317L3.92886 4.92896L10.9999 12ZM10.9999 19H20.9999V21H10.9999V19Z"></path></svg>
                                    <div>
                                        <h3>Документация</h3>
                                        <p class="text-black/50 font-normal">Подробные статьи о наших инструментах и технологиях для расширения возможностей команд.</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li><NuxtLink class="flex gap-2 text-black/50 hover:text-black/80 active:text-emerald-600 transition-all" to="/prices">Цены</NuxtLink></li>
                    <li><NuxtLink class="flex gap-2 text-black/50 hover:text-black/80 active:text-emerald-600 transition-all" to="/resources">Ресурсы</NuxtLink></li>
                    <li><NuxtLink class="flex gap-2 text-black/50 hover:text-black/80 active:text-emerald-600 transition-all" to="/about">О нас</NuxtLink></li>
                </ul>
            </nav>

            <!-- панель инструментов -->
            <nav>
                <ul class="hidden lg:flex gap-4 text-xl font-semibold ">
                    <!-- кнопка профиля -->
                    <li class="relative size-8 text-black/50 hover:text-black/80 active:text-emerald-600 transition-all">
                        <input type="checkbox" id="menu-profile" class="hidden peer/profile">
                        <label for="menu-profile" class="cursor-pointer">
                            <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path></svg>
                        </label>
                        <div class="scale-0 peer-checked/profile:lg:scale-100 lg:flex lg:flex-col gap-3 absolute right-0 text-xl font-semibold w-64 p-3 border border-black/10 rounded-md shadow-lg translate-y-1.5 transition-all">
                            <button class="flex items-center justify-center py-2 px-5 text-black/50 bg-white border border-black/10 rounded-md shadow-md hover:brightness-90 active:brightness-75 cursor-pointer transition-all">Войти</button>
                            <button class="py-2 px-5 text-white bg-emerald-600 hover:brightness-90 active:brightness-75 rounded-md shadow-md inset-shadow-sm inset-shadow-white/20 ring ring-emerald-600 inset-ring inset-ring-white/15 cursor-pointer transition-all">Создать профиль</button>
                        </div>
                    </li>
                    <!-- кнопка поиска -->
                    <li class="text-black/50 hover:text-black/80 active:text-emerald-600 transition-all">
                        <button class="size-8 cursor-pointer" title="Поиск">
                            <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z"></path></svg>
                            <svg class="hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.3807 2.01886C9.91573 3.38768 9 5.3369 9 7.49999C9 11.6421 12.3579 15 16.5 15C18.6631 15 20.6123 14.0843 21.9811 12.6193C21.6613 17.8537 17.3149 22 12 22C6.47715 22 2 17.5228 2 12C2 6.68514 6.14629 2.33869 11.3807 2.01886Z"></path></svg>
                        </button>
                    </li>
                    <!-- переключатель темы -->
                    <li class="text-black/50 hover:text-black/80 active:text-emerald-600 transition-all">
                        <button class="size-8 cursor-pointer">
                            <svg title="Темная тема" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z"></path></svg>
                        </button>
                    </li>
                </ul>
            </nav>
            <!-- / десктопная шапка -->

            <!-- мобильная шапка -->
            <button @click="mobileMenu = !mobileMenu" class="lg:hidden cursor-pointer">
                <svg v-if="!mobileMenu" viewBox="0 0 32 32" class="size-10"><path class="line hamburger_open" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path><path class="line" d="M7 16 27 16"></path></svg>
                <svg v-else viewBox="0 0 32 32" class="size-10 -rotate-45"><path class="line hamburger_close" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path><path class="line" d="M7 16 27 16"></path></svg>
            </button>
            <MobileHeader v-if="mobileMenu" />
            <!-- / мобильная шапка -->
        </div>
    </header>
</template>

<script setup>
const mobileMenu = ref(false)
</script>