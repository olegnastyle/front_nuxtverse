<template>
    <div class="min-h-screen bg-gray-100 p-6">
      <!-- Заголовок -->
      <h1 class="text-base/7 font-semibold text-left text-emerald-600">Ресурсы</h1>
  
      <!-- Окно чата -->
      <div class="bg-white shadow rounded-lg p-4 mb-6 h-80 overflow-y-auto">
        <div v-for="(msg, index) in chatHistory" :key="index" class="mb-4">
          <p
            :class="msg.role === 'user' ? 'text-blue-600 font-medium' : 'text-gray-800 font-semibold'"
          >
            {{ msg.role === 'user' ? 'Вы:' : 'AI:' }}
          </p>
          <div
            v-html="parseMarkdown(msg.content)"
            class="text-gray-700"
          ></div> <!-- Отображаем распарсенный Markdown -->
        </div>
        <div v-if="loading" class="flex justify-center items-center w-screen h-screen fixed top-0 left-0 z-50 backdrop-blur-sm">
          <svg class="animate-spin text-emerald-600 size-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z"></path></svg>
        </div>
      </div>
  
      <!-- Форма для ввода сообщений -->
      <form @submit.prevent="sendMessage" class="flex flex-col md:flex-row items-center space-x-4">
        <input
          v-model="userMessage"
          type="text"
          placeholder="Введите сообщение..."
          class="flex-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-emerald-300"
        />
        <button
          type="submit"
          :disabled="loading || !userMessage.trim()"
          class="px-6 py-2 bg-emerald-600 text-white rounded-lg shadow hover:bg-emerald-700 disabled:opacity-50"
        >
          Отправить
        </button>
      </form>
  
      <!-- Ошибка -->
      <p v-if="error" class="mt-4 text-red-500">Ошибка: {{ error }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import markdownit from "markdown-it";
  
  const md = markdownit(); // Создаем экземпляр markdown-it для парсинга
  
  const chatHistory = ref([]); // История чата
  const userMessage = ref(""); // Сообщение пользователя
  const loading = ref(false); // Индикатор загрузки
  const error = ref(null); // Ошибки
  
  // Функция для парсинга Markdown в HTML
  const parseMarkdown = (content) => {
    return md.render(content); // Возвращаем HTML из Markdown
  };
  
  // Функция для отправки сообщения и получения ответа
  const sendMessage = async () => {
    if (!userMessage.value.trim()) return;
  
    // Добавление сообщения пользователя в историю чата
    chatHistory.value.push({ role: "user", content: userMessage.value });
  
    try {
      loading.value = true;
      error.value = null;
  
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: "Bearer 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",
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:3000",
          "X-Title": "Big Cheese",
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-r1",
          messages: [
            ...chatHistory.value.map((msg) => ({
              role: msg.role,
              content: msg.content,
            })),
            { role: "user", content: userMessage.value },
          ],
        }),
      });
  
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
  
      const data = await res.json();
  
      // Добавление ответа AI в историю чата
      if (data?.choices?.length) {
        chatHistory.value.push({
          role: "assistant",
          content: data.choices[0].message.content,
        });
      } else {
        throw new Error("Unexpected response structure");
      }
    } catch (err) {
      console.error("Error:", err.message);
      error.value = err.message;
    } finally {
      loading.value = false;
      userMessage.value = ""; // Очистка поля ввода
    }
  };
  </script>
  