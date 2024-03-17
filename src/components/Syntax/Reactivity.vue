<script setup lang="ts">
import { reactive, ref } from 'vue'

const count = ref(0)
const todoList = reactive([
  {
    id: 1,
    title: 'a',
    done: false,
  },
  {
    id: 2,
    title: 'b',
    done: false,
  },
  {
    id: 3,
    title: 'c',
    done: true,
  },
])

function addOne() {
  count.value++
}

function subOne() {
  count.value--
}
</script>

<template>
  <div>
    {{ count }}
  </div>
  <button @click="addOne">addOne</button>
  <button @click="subOne">subOne</button>
  <hr />
  <div v-for="todo in todoList" :key="todo.id">
    {{ todo.title }}
    <span v-if="todo.done">done</span>
  </div>
</template>

<style scoped></style>
