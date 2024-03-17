<script setup lang="ts">
import { defineProps } from 'vue'
import { twMerge } from 'tailwind-merge'
import { ITodoListItem } from './hooks/useTodoList.ts'

const { todoListItem, removeOne } = defineProps<{
  todoListItem: ITodoListItem
  removeOne: (id: number) => void
}>()
</script>

<template>
  <div :class="twMerge('bg-gray-100 space-x-2 p-2 py-1')">
    <input class="" type="checkbox" v-model="todoListItem.done" />
    <input class="bg-transparent" type="text" v-model="todoListItem.title" />
    <button @click="removeOne(todoListItem.id)">x</button>
  </div>
</template>

<style scoped></style>
