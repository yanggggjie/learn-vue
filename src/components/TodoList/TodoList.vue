<script lang="ts" setup>
const props = defineProps<{}>()

import TodoListItem from './TodoListItem.vue'
import { reactive } from 'vue'
import { twMerge } from 'tailwind-merge'

export interface ITodoListItem {
  id: number
  title: string
  done: boolean
}

const todoList = reactive<ITodoListItem[]>([
  { id: 1, title: 'Task1', done: false },
  { id: 2, title: 'Task2', done: false },
  { id: 3, title: 'Task3', done: true },
])

function addNewOne() {
  todoList.push({
    id: todoList.length,
    title: 'newTask',
    done: false,
  })
}

function removeOne(id: number) {
  const idx = todoList.findIndex((todo) => {
    return todo.id === id
  })
  if (idx !== -1) {
    todoList.splice(idx, 1)
  }
}
</script>

<template>
  <div :class="twMerge('w-96 space-y-2 m-4')">
    <h1 :class="twMerge('font-bold text-3xl')">Todos</h1>
    <div v-for="todo in todoList" :key="todo.id">
      <TodoListItem :todoListItem="todo" :onDelete="removeOne"></TodoListItem>
    </div>
    <button
      :class="twMerge('h-6 w-6 rounded-full bg-gray-200')"
      @click="addNewOne"
    >
      +
    </button>
  </div>
</template>

<style scoped></style>
