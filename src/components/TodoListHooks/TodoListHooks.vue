<script lang="ts" setup>
import TodoListItem from './TodoListItem.vue'
import { twMerge } from 'tailwind-merge'
import useTodoList from './hooks/useTodoList.ts'
const { todoList, removeOne, addNewOne } = useTodoList()
</script>

<template>
  <div :class="twMerge('w-96 space-y-2 m-4')">
    <h1 :class="twMerge('font-bold text-3xl')">Todos</h1>
    <div v-for="todo in todoList" :key="todo.id">
      <TodoListItem :todoListItem="todo" :removeOne="removeOne" />
    </div>
    <button
      @click="addNewOne"
      :class="twMerge('h-6 w-6 rounded-full bg-gray-200')"
    >
      +
    </button>
  </div>
</template>

<style scoped></style>
