<template>
    <div class="w-full overflow-hidden animal_burger">
        <nav class="border-b">
            <ul class="py-6 font-semibold">
                <li>
                    <a class="flex justify-between py-3 text-black" href="#">Продукты</a>
                </li>
                <li>
                    <input type="checkbox" id="accordion" class="hidden peer/accordion">
                    <label for="accordion"
                        class="flex justify-between py-3 text-black cursor-pointer peer-checked/accordion:text-emerald-600 peer-checked/accordion:*:rotate-180"
                        href="#">
                        Услуги
                        <span class="text-black/50">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5">
                                </path>
                            </svg>
                        </span>
                    </label>
                    <ul class="hidden peer-checked/accordion:block p-2 rounded-lg border border-black/20">
                        <li>
                            <a href="#" class="flex gap-3 w-full p-2 rounded-md hover:bg-emerald-600/10">
                                <svg class="text-emerald-600 size-8" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM6 7H12V13H6V7ZM8 9V11H10V9H8ZM14 9H18V7H14V9ZM18 13H14V11H18V13ZM6 15V17L18 17V15L6 15Z">
                                    </path>
                                </svg>
                                <div>
                                    <h3>Блог</h3>
                                    <p class="text-black/50 font-normal">Последние отраслевые новости, обновления и
                                        информация.</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex gap-3 w-full p-2 rounded-md hover:bg-emerald-600/10">
                                <svg class="text-emerald-600 size-8" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M12 20H20V22H12C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.2512 21.2561 16.3287 20.0007 18H17.2916C18.9525 16.5341 20 14.3894 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8C14 9.10457 13.1046 10 12 10ZM8 14C6.89543 14 6 13.1046 6 12C6 10.8954 6.89543 10 8 10C9.10457 10 10 10.8954 10 12C10 13.1046 9.10457 14 8 14ZM16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10C17.1046 10 18 10.8954 18 12C18 13.1046 17.1046 14 16 14ZM12 18C10.8954 18 10 17.1046 10 16C10 14.8954 10.8954 14 12 14C13.1046 14 14 14.8954 14 16C14 17.1046 13.1046 18 12 18Z">
                                    </path>
                                </svg>
                                <div>
                                    <h3>Видео гайды</h3>
                                    <p class="text-black/50 font-normal">Ознакомьтесь с нашими новейшими функциями и
                                        подробными руководствами.</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex gap-3 w-full p-2 rounded-md hover:bg-emerald-600/10">
                                <svg class="text-emerald-600 size-8" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M10.9999 12L3.92886 19.0711L2.51465 17.6569L8.1715 12L2.51465 6.34317L3.92886 4.92896L10.9999 12ZM10.9999 19H20.9999V21H10.9999V19Z">
                                    </path>
                                </svg>
                                <div>
                                    <h3>Документация</h3>
                                    <p class="text-black/50 font-normal">Подробные статьи о наших инструментах и
                                        технологиях для расширения возможностей команд.</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li><a class="flex justify-between py-3 text-black" href="#">Цены</a></li>
                <li><a class="flex justify-between py-3 text-black" href="#">Ресурсы</a></li>
                <li><a class="flex justify-between py-3 text-black" href="#">О нас</a></li>
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
            <button
                class="mx-0.5 py-2 px-5 text-white bg-emerald-600 rounded-md shadow-md hover:brightness-90 active:brightness-75 cursor-pointer ring ring-emerald-600 inset-shadow-sm inset-shadow-white/20 inset-ring inset-ring-white/15">Создать
                профиль</button>
            <button
                class="flex items-center justify-center py-2 px-5 text-black/50 bg-white border border-black/10 rounded-md shadow-md hover:brightness-90 active:brightness-75 cursor-pointer">Войти</button>
        </div>
    </div>
</template>