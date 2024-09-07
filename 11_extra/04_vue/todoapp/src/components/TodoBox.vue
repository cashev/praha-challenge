<script setup lang="ts">
import { ref } from 'vue'
import TodoList from './TodoList.vue'
import TodoForm from './TodoForm.vue'

export interface Todo {
  id: string
  task: string
  complete: boolean
}

const data = ref<Todo[]>([
  { id: '00001', task: 'Wake up', complete: false },
  { id: '00002', task: 'Eat breakfast', complete: false },
  { id: '00003', task: 'Go to work', complete: false }
])
</script>

<template>
  <div class="well">
    <h1 class="vert-offset-top-0">To do:</h1>
    <TodoList :data="data" />
    <TodoForm />
  </div>
</template>
